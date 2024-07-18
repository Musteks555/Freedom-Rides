import Filters from "../Filters/Filters";
import Location from "../Location/Location";
import SearchBtn from "../SearchBtn/SearchBtn";

import css from "./SideMenu.module.css";

const SideMenu = () => {
    return (
        <div>
            <Location />
            <Filters />
            <SearchBtn />
        </div>
    );
};

export default SideMenu;
