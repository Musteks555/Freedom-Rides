import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

import { selectHasLoaded, selectLoading } from "../../redux/campers/selectors";
import { fetchCampers } from "../../redux/campers/operations";

import CamperList from "../../components/CamperList/CamperList";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import SideMenu from "../../components/SideMenu/SideMenu";
import ModalWrap from "../../components/Modal/Modal";
import Loader from "../../components/Loader/Loader";

import { errorToast } from "../../helpers/toast";

import css from "./Catalog.module.css";

const Catalog = () => {
    const dispatch = useDispatch();

    const isLoading = useSelector(selectLoading);
    const hasLoaded = useSelector(selectHasLoaded);

    useEffect(() => {
        if (!hasLoaded) {
            dispatch(fetchCampers({ page: 1, limit: 4 }))
                .unwrap()
                .then(() => {})
                .catch((error) => {
                    errorToast("Error fetching campers: ", error);
                });
        }
    }, [dispatch, hasLoaded]);

    return (
        <>
            <DocumentTitle>Catalog</DocumentTitle>
            {isLoading && <Loader />}
            <Toaster />

            <div className={css.container}>
                <SideMenu />
                <CamperList />
            </div>

            <ModalWrap />
        </>
    );
};

export default Catalog;
