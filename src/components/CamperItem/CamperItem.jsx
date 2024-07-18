import clsx from "clsx";

import icons from "../../images/icons.svg";

import css from "./CamperItem.module.css";
import FeaturesItem from "../FeaturesItem/FeaturesItem";

const CamperItem = ({ camperProps }) => {
    return (
        <div className={css.container}>
            <img src={camperProps.gallery[0]} alt={camperProps.name} className={css.image} />

            <div className={css.infoContainer}>
                <div className={css.infoHeader}>
                    <div className={css.infoHeaderTitle}>
                        <p className={css.infoHeaderName}>{camperProps.name}</p>

                        <div className={css.infoHeaderPriceContainer}>
                            <p className={css.infoHeaderPrice}>€{camperProps.price}</p>

                            <button type="button" className={css.infoHeaderLikeBtn}>
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

                <button type="button" className={css.infoBtn}>
                    Show more
                </button>
            </div>
        </div>
    );
};

export default CamperItem;
