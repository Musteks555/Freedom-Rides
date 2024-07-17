import Filter from "../Filter/Filter";
import css from "./Filters.module.css";

const Filters = () => {
    return (
        <div>
            <p>Filters</p>

            <Filter type={"Vehicle equipment"} />
        </div>
    );
};

export default Filters;
