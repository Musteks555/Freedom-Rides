import { useState } from "react";
import Modal from "react-modal";
import clsx from "clsx";

import ModalDetailedInfo from "../components/ModalDetailedInfo/ModalDetailedInfo";
import ModalReviews from "../components/ModalReviews/ModalReviews";
import ModalForm from "../components/ModalForm/ModalForm";

import icons from "../images/icons.svg";

import css from "./Modal.module.css";

Modal.setAppElement("#root");

const camperItem = {
    _id: "4",
    name: "Mighty Class C Large [MT]",
    price: 12000,
    rating: 4.4,
    location: "Ukraine, Odesa",
    adults: 4,
    children: 2,
    engine: "petrol",
    transmission: "automatic",
    form: "alcove",
    length: "8.2m",
    width: "3.04m",
    height: "3.65m",
    tank: "208l",
    consumption: "25l/100km",
    description:
        "Embark on a grand adventure with the Mighty Class C Large [MT], a spacious and powerful alcove-style motorhome designed for larger groups and families. This RV is not just a mode of transportation but a mobile haven with ample space and premium amenities to ensure a comfortable and enjoyable journey through picturesque landscapes and charming destinations.",
    details: {
        airConditioner: 1,
        bathroom: 1,
        kitchen: 1,
        beds: 4,
        TV: 1,
        CD: 1,
        radio: 1,
        shower: 1,
        toilet: 1,
        freezer: 1,
        hob: 3,
        microwave: 1,
        gas: "27kg",
        water: "151l",
    },
    gallery: [
        "https://ftp.goit.study/img/campers-test-task/4-1.webp",
        "https://ftp.goit.study/img/campers-test-task/4-2.webp",
        "https://ftp.goit.study/img/campers-test-task/4-3.webp",
    ],
    reviews: [
        {
            reviewer_name: "Alice",
            reviewer_rating: 5,
            comment:
                "The Mighty Class C Large [MT] provided an exceptional experience for our family road trip. Spacious interiors, well-equipped kitchen, and comfortable beds made our journey memorable. Highly recommended for larger groups looking for a premium RV.",
        },
        {
            reviewer_name: "Bob",
            reviewer_rating: 3,
            comment:
                "Decent motorhome, but had some issues with functionality. The kitchen facilities were good, but the gas supply seemed insufficient. Overall, a satisfactory experience for our group.",
        },
        {
            reviewer_name: "Bob",
            reviewer_rating: 3,
            comment:
                "Decent motorhome, but had some issues with functionality. The kitchen facilities were good, but the gas supply seemed insufficient. Overall, a satisfactory experience for our group.",
        },
        {
            reviewer_name: "Bob",
            reviewer_rating: 3,
            comment:
                "Decent motorhome, but had some issues with functionality. The kitchen facilities were good, but the gas supply seemed insufficient. Overall, a satisfactory experience for our group.",
        },
    ],
};

const ModalWrap = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [activeTab, setActiveTab] = useState("features");

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            overlayClassName={css.overlay}
            className={css.modalContainer}
        >
            <div className={css.modalContentWrapper}>
                <div className={css.modalHeader}>
                    <div className={css.modalHeaderTitle}>
                        <p className={css.modalHeaderName}>{camperItem.name}</p>

                        <button type="button" className={css.modalCloseBtn} onClick={closeModal}>
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
                    {activeTab === "features" ? <ModalDetailedInfo camperItem={camperItem} /> : <ModalReviews camperItem={camperItem} />}

                    <ModalForm />
                </div>
            </div>
        </Modal>
    );
};

export default ModalWrap;
