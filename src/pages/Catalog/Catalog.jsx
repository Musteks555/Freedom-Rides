import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

import { selectLoading } from "../../redux/campers/selectors";
import { fetchCampers } from "../../redux/campers/operations";

import CamperList from "../../components/CamperList/CamperList";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import SideMenu from "../../components/SideMenu/SideMenu";
import ModalWrap from "../../components/Modal/Modal";
import Loader from "../../components/Loader/Loader";

import css from "./Catalog.module.css";

const Catalog = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchCampers({ page: 1, limit: 4 }));
    }, [dispatch]);

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
