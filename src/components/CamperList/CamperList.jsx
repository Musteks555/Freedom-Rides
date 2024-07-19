import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCampers, selectCurrentPage, selectError, selectLoading } from "../../redux/campers/selectors";
import { fetchCampers } from "../../redux/campers/operations";
import { setPage } from "../../redux/campers/slice";

import CamperItem from "../CamperItem/CamperItem";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

import css from "./CamperList.module.css";

const CamperList = () => {
    const dispatch = useDispatch();

    const camperList = useSelector(selectCampers);
    const currentPage = useSelector(selectCurrentPage);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchCampers({ page: currentPage, limit: 4 }));
    }, [dispatch, currentPage]);

    const handleLoadMore = () => {
        dispatch(setPage(currentPage + 1));
    };

    return (
        <div className={css.container}>
            <ul className={css.list}>
                {camperList.map((camperProps) => {
                    return (
                        <li key={camperProps._id} className={css.item}>
                            <CamperItem camperProps={camperProps} />
                        </li>
                    );
                })}
            </ul>

            <LoadMoreBtn onClick={handleLoadMore} />
        </div>
    );
};

export default CamperList;
