import Filter from "../Filter/Filter";

import css from "./Filters.module.css";

const Filters = () => {
    return (
        <div className={css.container}>
            <p className={css.menuType}>Filters</p>

            <Filter filterType={"vehicleEquipment"} />

            <Filter filterType={"vehicleType"} />
        </div>
    );
};

export default Filters;
