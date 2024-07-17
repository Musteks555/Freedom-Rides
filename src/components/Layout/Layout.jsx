import Header from "../Header/Header";

import css from "./Layout.module.css";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default Layout;
