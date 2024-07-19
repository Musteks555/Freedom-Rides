import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import clsx from "clsx";

import icons from "../../images/icons.svg";

import css from "./ModalForm.module.css";

const ModalForm = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
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
                                    showIcon
                                    toggleCalendarOnIconClick
                                    icon={
                                        <svg className={css.modalCalendarIcon} width="20" height="20">
                                            <use href={`${icons}#icon-calendar`}></use>
                                        </svg>
                                    }
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
