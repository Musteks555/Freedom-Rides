import icons from "../../images/icons.svg";

import css from "./Location.module.css";

const Location = () => {
    return (
        <div className={css.container}>
            <p className={css.menuType}>Location</p>

            <div className={css.inputContainer}>
                <svg className={css.icon} width="18" height="20">
                    <use href={`${icons}#icon-map-pin`}></use>
                </svg>

                <input className={css.input} type="text" placeholder="City" />
            </div>
        </div>
    );
};

export default Location;
