import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCampers, selectCurrentPage, selectError, selectLoading } from "../../redux/campers/selectors";
import { fetchCampers } from "../../redux/campers/operations";
import { setPage } from "../../redux/campers/slice";

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

    useEffect(() => {
        dispatch(fetchCampers({ page: currentPage, limit: 4 }))
            .unwrap()
            .then((data) => {
                if (data.items.length < 4) {
                    setButtonVisible(false);

                    if (data.items.length === 0 && currentPage > 1) {
                        errorToast("No more items to load");
                    }
                }
            })
            .catch((error) => {
                errorToast("Error fetching campers");
            });
    }, [dispatch, currentPage]);

    const handleLoadMore = () => {
        dispatch(setPage(currentPage + 1));
    };

    return (
        <>
            {isLoading && <Loader />}

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

                {isButtonVisible && <LoadMoreBtn onClick={handleLoadMore} />}
            </div>
        </>
    );
};

export default CamperList;
