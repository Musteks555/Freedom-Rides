import icons from "../../images/icons.svg";

import css from "./FilterType.module.css";

const FilterType = ({ img, type, value, size, filterType, isChecked, onChange }) => {
    return (
        <label className={`${css.filterLabel} ${isChecked ? css.active : ""}`}>
            <input
                type={filterType === "vehicleType" ? "radio" : "checkbox"}
                name={filterType}
                checked={isChecked}
                onChange={onChange}
                className={css.filterInput}
                value={value}
            />

            <div className={css.container}>
                <svg className={css.icon} width={size.width} height={size.height}>
                    <use href={`${icons}#${img}`}></use>
                </svg>

                <p className={css.text}>{type}</p>
            </div>
        </label>
    );
};

export default FilterType;
