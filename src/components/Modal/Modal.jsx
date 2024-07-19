import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import clsx from "clsx";

import { closeModal } from "../../redux/modal/slice";
import { selectModalCamper, selectModalState } from "../../redux/modal/selectors";

import ModalDetailedInfo from "../ModalDetailedInfo/ModalDetailedInfo";
import ModalReviews from "../ModalReviews/ModalReviews";
import ModalForm from "../ModalForm/ModalForm";

import icons from "../../images/icons.svg";

import css from "./Modal.module.css";

Modal.setAppElement("#root");

const ModalWrap = () => {
    const [activeTab, setActiveTab] = useState("features");

    const dispatch = useDispatch();

    const isOpen = useSelector(selectModalState);
    const camperItem = useSelector(selectModalCamper);

    if (!isOpen) return null;

    const handleClose = () => {
        dispatch(closeModal());
        setActiveTab("features");
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            overlayClassName={css.overlay}
            className={css.modalContainer}
        >
            <div className={css.modalContentWrapper}>
                <div className={css.modalHeader}>
                    <div className={css.modalHeaderTitle}>
                        <p className={css.modalHeaderName}>{camperItem.name}</p>

                        <button type="button" className={css.modalCloseBtn} onClick={handleClose}>
                            <svg className={css.modalCloseBtnIcon} width="32" height="32">
                                <use href={`${icons}#icon-close`}></use>
                            </svg>
                        </button>
                    </div>

                    <div className={css.modalHeaderSubTitle}>
                        <div className={css.modalHeaderSubTitleContainer}>
                            <svg className={css.modalHeaderRatingIcon} width="16" height="16">
                                <use href={`${icons}#icon-star`}></use>
                            </svg>

                            <p className={clsx(css.modalHeaderSubTitleText, css.modalHeaderRatingText)}>
                                {camperItem.rating} ({camperItem.reviews.length} Reviews)
                            </p>
                        </div>

                        <div className={css.modalHeaderSubTitleContainer}>
                            <svg className={css.infoIcon} width="16" height="16">
                                <use href={`${icons}#icon-map-pin`}></use>
                            </svg>

                            <p className={css.modalHeaderSubTitleText}>{camperItem.location}</p>
                        </div>
                    </div>

                    <p className={css.modalHeaderPrice}>€{camperItem.price}</p>
                </div>

                <ul className={css.modalGalleryList}>
                    {camperItem.gallery.map((img) => (
                        <li key={img} className={css.modalGalleryItem}>
                            <img src={img} alt="Camper" className={css.modalGalleryImg} width={290} height={310} />
                        </li>
                    ))}
                </ul>

                <p className={css.modalDescription}>{camperItem.description}</p>

                <nav>
                    <ul className={css.modalNav}>
                        <li className={css.modalNavItem}>
                            <button
                                type="button"
                                onClick={() => setActiveTab("features")}
                                className={clsx(css.modalTab, { [css.modalTabActive]: activeTab === "features" })}
                            >
                                Features
                            </button>
                        </li>
                        <li className={css.modalNavItem}>
                            <button
                                type="button"
                                onClick={() => setActiveTab("reviews")}
                                className={clsx(css.modalTab, { [css.modalTabActive]: activeTab === "reviews" })}
                            >
                                Reviews
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className={css.modalInfoContainer}>
                    {activeTab === "features" ? <ModalDetailedInfo /> : <ModalReviews />}

                    <ModalForm />
                </div>
            </div>
        </Modal>
    );
};

export default ModalWrap;
