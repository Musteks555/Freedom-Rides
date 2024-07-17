import { NavLink } from "react-router-dom";

import css from "./Header.module.css";

const Header = () => {
    return (
        <header className={css.header}>
            <ul className={css.headerContainer}>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>

                <li>
                    <NavLink to={"/catalog"}>Catalog</NavLink>
                </li>

                <li>
                    <NavLink to={"/favorites"}>Favorites</NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;
