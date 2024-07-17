import Filters from "../Filters/Filters";
import Location from "../Location/Location";

import css from "./SideMenu.module.css";

const SideMenu = () => {
    return (
        <div className={css.container}>
            <Location />
            <Filters />
        </div>
    );
};

export default SideMenu;
