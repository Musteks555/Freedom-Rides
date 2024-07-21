import { NavLink } from "react-router-dom";

import css from "./Header.module.css";

const Header = () => {
    return (
        <header className={css.header}>
            <ul className={css.headerContainer}>
                <li>
                    <NavLink
                        to={"/"}
                        style={({ isActive }) => ({
                            color: isActive ? "var(--button)" : "inherit",
                        })}
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to={"/catalog"}
                        style={({ isActive }) => ({
                            color: isActive ? "var(--button)" : "inherit",
                        })}
                    >
                        Catalog
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to={"/favorites"}
                        style={({ isActive }) => ({
                            color: isActive ? "var(--button)" : "inherit",
                        })}
                    >
                        Favorites
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;
