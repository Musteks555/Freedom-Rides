import CamperList from "../../components/CamperList/CamperList";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import SideMenu from "../../components/SideMenu/SideMenu";
import ModalWrap from "../../Modal/Modal";

import css from "./Catalog.module.css";

const Catalog = () => {
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
