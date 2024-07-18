import icons from "../../images/icons.svg";

import css from "./FeaturesItem.module.css";

const FeaturesItem = ({ icon, text }) => {
    return (
        <div className={css.container}>
            <svg className={css.icon} width="20" height="20">
                <use href={`${icons}#${icon}`}></use>
            </svg>

            <p className={css.text}>{text}</p>
        </div>
    );
};

export default FeaturesItem;
