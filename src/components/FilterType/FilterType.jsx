import icons from "../../images/icons.svg";

import css from "./FilterType.module.css";

const FilterType = ({ img, type, size }) => {
    return (
        <button type="button" className={css.filterBtn}>
            <div className={css.container}>
                <svg className={css.icon} width={size.width} height={size.height}>
                    <use href={`${icons}#${img}`}></use>
                </svg>

                <p className={css.text}>{type}</p>
            </div>
        </button>
    );
};

export default FilterType;
