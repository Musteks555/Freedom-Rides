import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

import { selectModalCamper } from "../../redux/modal/selectors";

import { firstLetter } from "../../helpers/heplers";

import icons from "../../images/icons.svg";
import css from "./ModalReviews.module.css";

const ModalReviews = () => {
    const camperItem = useSelector(selectModalCamper);

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <li key={index}>
                <svg className={index < rating ? css.modalReviewRatingIconFill : css.modalReviewRatingIcon} width="16" height="16">
                    <use href={`${icons}#icon-star`}></use>
                </svg>
            </li>
        ));
    };

    return (
        <ul className={css.modalReviewsList}>
            {camperItem.reviews.map((review) => (
                <li key={nanoid()} className={css.modalReviewsItem}>
                    <div className={css.modalReviewHeaderContainer}>
                        <div className={css.modalReviewAvatar}>{firstLetter(review.reviewer_name)}</div>

                        <div className={css.modalReviewInfo}>
                            <p className={css.modalReviewName}>{review.reviewer_name}</p>

                            <ul className={css.modalReviewRatingContainer}>{renderStars(review.reviewer_rating)}</ul>
                        </div>
                    </div>

                    <p className={css.modalReviewComment}>{review.comment}</p>
                </li>
            ))}
        </ul>
    );
};

export default ModalReviews;
