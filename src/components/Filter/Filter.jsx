import FilterType from "../FilterType/FilterType";

import css from "./Filter.module.css";

const vehicleEquipment = {
    name: "Vehicle equipment",
    iconSize: {
        width: 32,
        height: 32,
    },
    infoArr: [
        {
            img: "icon-ac",
            type: "AC",
        },
        {
            img: "icon-automatic",
            type: "Automatic",
        },
        {
            img: "icon-kitchen",
            type: "Kitchen",
        },
        {
            img: "icon-tv",
            type: "TV",
        },
        {
            img: "icon-shower",
            type: "Shower/WC",
        },
    ],
};

const vehicleType = {
    name: "Vehicle type",
    iconSize: {
        width: 40,
        height: 28,
    },
    infoArr: [
        {
            img: "icon-camperVan",
            type: "Van",
        },
        {
            img: "icon-camperFull",
            type: "Fully Integrated",
        },
        {
            img: "icon-camperAlcove",
            type: "Alcove",
        },
    ],
};

const Filter = ({ filterType }) => {
    let currentType;

    switch (filterType) {
        case "vehicleEquipment":
            currentType = vehicleEquipment;
            break;

        case "vehicleType":
            currentType = vehicleType;
            break;

        default:
            break;
    }

    return (
        <div className={css.container}>
            <p className={css.filterName}>{currentType.name}</p>

            <ul className={css.filterList}>
                {currentType.infoArr.map(({ img, type }) => {
                    return (
                        <li key={type} className={css.filterItem}>
                            <FilterType img={img} type={type} size={currentType.iconSize} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Filter;
