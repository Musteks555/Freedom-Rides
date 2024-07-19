import { useDispatch, useSelector } from "react-redux";

import { selectLoading } from "../../redux/campers/selectors";
import { fetchCampers } from "../../redux/campers/operations";

import CamperList from "../../components/CamperList/CamperList";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import SideMenu from "../../components/SideMenu/SideMenu";
import ModalWrap from "../../components/Modal/Modal";

import css from "./Catalog.module.css";
import { useEffect } from "react";

const Catalog = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    return (
        <>
            <DocumentTitle>Catalog</DocumentTitle>

            <div className={css.container}>
                <SideMenu />
                <CamperList />
            </div>

            <ModalWrap />
        </>
    );
};

export default Catalog;
