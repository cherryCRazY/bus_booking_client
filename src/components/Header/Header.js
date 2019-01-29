import React, { Component } from "react";
import Styles from "./styles.module.scss";
import logo from "../../assets/images/OVO_LOGO.png";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <>
                <nav className={Styles.Header}>
                    <NavLink to="/">
                        <img src={logo} alt="logo" className={Styles.img} />
                    </NavLink>
                    <NavLink
                        className={Styles.button}
                        to="/auth/google"
                        activeClassName={Styles.active}
                    >
                        Login with Google
                    </NavLink>
                    <div className={Styles.button}>Login</div>
                    <div className={Styles.button}>Login</div>
                </nav>
            </>
        );
    }
}

export default Header;
