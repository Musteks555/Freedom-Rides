import CamperItem from "../CamperItem/CamperItem";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

import css from "./CamperList.module.css";

const CamperList = () => {
    return (
        <div>
            <ul className={css.list}>
                <li className={css.item}>
                    <CamperItem />
                </li>
            </ul>

            <LoadMoreBtn />
        </div>
    );
};

export default CamperList;
