import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCampers, selectCurrentPage, selectLoading } from "../../redux/campers/selectors";
import { setPage } from "../../redux/campers/slice";
import { fetchCampers } from "../../redux/campers/operations";

import CamperItem from "../CamperItem/CamperItem";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";

import { errorToast } from "../../helpers/toast";

import css from "./CamperList.module.css";

const CamperList = () => {
    const dispatch = useDispatch();

    const camperList = useSelector(selectCampers);
    const currentPage = useSelector(selectCurrentPage);
    const isLoading = useSelector(selectLoading);

    const [isButtonVisible, setButtonVisible] = useState(true);

    const handleLoadMore = async () => {
        try {
            dispatch(setPage(currentPage + 1));

            const newPage = currentPage + 1;
            const data = await dispatch(fetchCampers({ page: newPage, limit: 4 })).unwrap();

            if (data.items.length < 4) {
                setButtonVisible(false);
            }
            if (data.items.length === 0 && newPage > 1) {
                errorToast("No more items to load");
            }
        } catch (error) {
            errorToast("Error fetching campers: ", error);
        }
    };

    return (
        <>
            {isLoading && <Loader />}
            <div className={css.container}>
                <ul className={css.list}>
                    {camperList.map((camperProps) => (
                        <li key={camperProps._id} className={css.item}>
                            <CamperItem camperProps={camperProps} />
                        </li>
                    ))}
                </ul>
                {isButtonVisible && <LoadMoreBtn onClick={handleLoadMore} />}
            </div>
        </>
    );
};

export default CamperList;
