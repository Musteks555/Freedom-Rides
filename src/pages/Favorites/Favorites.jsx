import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

import { fetchFavoritesCampers } from "../../redux/campers/operations";
import { selectFavorites, selectLoading } from "../../redux/campers/selectors";

import CamperItem from "../../components/CamperItem/CamperItem";
import ModalWrap from "../../components/Modal/Modal";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import Loader from "../../components/Loader/Loader";

import { errorToast } from "../../helpers/toast";

import css from "./Favorites.module.css";

const Favorites = () => {
    const dispatch = useDispatch();

    const isLoading = useSelector(selectLoading);
    const camperFavoritesList = useSelector(selectFavorites);

    useEffect(() => {
        dispatch(fetchFavoritesCampers())
            .unwrap()
            .catch((error) => {
                errorToast("Error fetching campers: ", error);
            });
    }, [dispatch]);

    return (
        <>
            <DocumentTitle>Favorites</DocumentTitle>
            {isLoading && <Loader />}
            <Toaster />

            <h1 className={css.favoriteTitle}>Your Favorite Campers</h1>

            <ul className={css.list}>
                {camperFavoritesList.map((camperProps) => (
                    <li key={camperProps._id} className={css.item}>
                        <CamperItem camperProps={camperProps} />
                    </li>
                ))}
            </ul>

            <ModalWrap />
        </>
    );
};

export default Favorites;
