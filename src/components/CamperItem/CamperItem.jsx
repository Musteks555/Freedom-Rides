import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";

import { openModal } from "../../redux/modal/slice";
import { removeFavorite } from "../../redux/campers/slice";

import FeaturesItem from "../FeaturesItem/FeaturesItem";

import icons from "../../images/icons.svg";
import css from "./CamperItem.module.css";

const CamperItem = ({ camperProps }) => {
    const dispatch = useDispatch();

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFavorite(favorites.includes(camperProps._id));
    }, [camperProps._id]);

    const handleShowMore = () => {
        dispatch(openModal(camperProps));
    };

    const handleLikeToggle = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (favorites.includes(camperProps._id)) {
            const updatedFavorites = favorites.filter((id) => id !== camperProps._id);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            setIsFavorite(false);
            dispatch(removeFavorite(camperProps._id));
        } else {
            favorites.push(camperProps._id);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            setIsFavorite(true);
        }
    };

    return (
        <div className={css.container}>
            <img src={camperProps.gallery[0]} alt={camperProps.name} className={css.image} />

            <div className={css.infoContainer}>
                <div className={css.infoHeader}>
                    <div className={css.infoHeaderTitle}>
                        <p className={css.infoHeaderName}>{camperProps.name}</p>

                        <div className={css.infoHeaderPriceContainer}>
                            <p className={css.infoHeaderPrice}>€{camperProps.price}</p>

                            <button
                                type="button"
                                className={clsx(css.infoHeaderLikeBtn, { [css.active]: isFavorite })}
                                onClick={handleLikeToggle}
                            >
                                <svg className={css.infoHeaderLikeIcon} width="24" height="24">
                                    <use href={`${icons}#icon-like`}></use>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={css.infoHeaderSubTitle}>
                        <div className={css.infoHeaderSubTitleContainer}>
                            <svg className={css.infoHeaderRatingIcon} width="16" height="16">
                                <use href={`${icons}#icon-star`}></use>
                            </svg>

                            <p className={clsx(css.infoHeaderSubTitleText, css.infoHeaderRatingText)}>
                                {camperProps.rating}({camperProps.reviews.length} Reviews)
                            </p>
                        </div>

                        <div className={css.infoHeaderSubTitleContainer}>
                            <svg className={css.infoIcon} width="16" height="16">
                                <use href={`${icons}#icon-map-pin`}></use>
                            </svg>

                            <p className={css.infoHeaderSubTitleText}>{camperProps.location}</p>
                        </div>
                    </div>
                </div>

                <p className={css.infoDescription}>{camperProps.description}</p>

                <ul className={css.infoFeaturesList}>
                    <li className={css.infoFeaturesItem}>
                        <FeaturesItem icon={"icon-users"} text={`${camperProps.adults} adults`} />
                    </li>

                    <li className={css.infoFeaturesItem}>
                        <FeaturesItem icon={"icon-automatic"} text={`${camperProps.transmission}`} />
                    </li>

                    <li className={css.infoFeaturesItem}>
                        <FeaturesItem icon={"icon-petrol"} text={`${camperProps.engine}`} />
                    </li>

                    <li className={css.infoFeaturesItem}>
                        <FeaturesItem icon={"icon-kitchen"} text={`Kitchen`} />
                    </li>

                    <li className={css.infoFeaturesItem}>
                        <FeaturesItem icon={"icon-bed"} text={`${camperProps.details.beds} beds`} />
                    </li>

                    <li className={css.infoFeaturesItem}>
                        <FeaturesItem icon={"icon-ac"} text={"AC"} />
                    </li>
                </ul>

                <button type="button" className={css.infoBtn} onClick={handleShowMore}>
                    Show more
                </button>
            </div>
        </div>
    );
};

export default CamperItem;
