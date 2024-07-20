import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { errorToast } from "../../helpers/toast";

import icons from "../../images/icons.svg";
import clsx from "clsx";
import css from "./ModalForm.module.css";

const schema = Yup.object().shape({
    name: Yup.string().required("Name is required!").min(2, "Name must be at least 2 characters").max(30, "Too long characters!"),
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email")
        .matches(/^[^@]+@[^@]+\.[^@]+$/, "Email must be valid"),
    bookingDate: Yup.date().required("Booking date is required").min(new Date(), "Booking date cannot be in the past"),
    comment: Yup.string().max(500, "Too long characters!"),
});

const ModalForm = () => {
    const [minDate] = useState(new Date());

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        try {
            window.location.reload();
        } catch (error) {
            errorToast("Failed to book. Please try again.");
        }
    };

    return (
        <div className={css.modalFormContainer}>
            <p className={css.modalFormTitle}>Book your campervan now</p>
            <p className={css.modalFormSubTitle}>Stay connected! We are always ready to help you.</p>

            <form onSubmit={handleSubmit(onSubmit)} className={css.modalForm}>
                <div className={css.modalInputContainer}>
                    {errors.name && <span className={css.errorText}>{errors.name.message}</span>}
                    <input {...register("name", { required: "Name is required" })} placeholder="Name" className={css.modalInput} />
                </div>

                <div className={css.modalInputContainer}>
                    {errors.email && <span className={css.errorText}>{errors.email.message}</span>}
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: "Invalid email address",
                            },
                        })}
                        placeholder="Email"
                        className={css.modalInput}
                    />
                </div>

                <div className={css.modalInputContainer}>
                    {errors.bookingDate && <span className={css.errorText}>{errors.bookingDate.message}</span>}
                    <div className={css.modalDateContainer}>
                        <Controller
                            control={control}
                            name="bookingDate"
                            rules={{ required: "Booking date is required" }}
                            render={({ field }) => (
                                <DatePicker
                                    placeholderText="Booking Date"
                                    onChange={(date) => field.onChange(date)}
                                    selected={field.value}
                                    className={css.modalInput}
                                    minDate={minDate}
                                    showIcon
                                    toggleCalendarOnIconClick
                                    icon={
                                        <svg className={css.modalCalendarIcon} width="20" height="20">
                                            <use href={`${icons}#icon-calendar`}></use>
                                        </svg>
                                    }
                                    dateFormat="dd.MM.yyyy"
                                />
                            )}
                        />
                    </div>
                </div>

                <textarea {...register("comment")} placeholder="Comment" className={clsx(css.modalInput, css.modalTextarea)} />

                <button type="submit" className={css.modalBtn}>
                    Send
                </button>
            </form>
        </div>
    );
};

export default ModalForm;
