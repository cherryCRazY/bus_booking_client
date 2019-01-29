import React, { Component } from "react";
import Styles from "./Header.module.scss";
import logo from "../../assets/images/OVO_LOGO.png";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <>
                <nav className={Styles.Header}>
                    <img src={logo} />
                    <div className={Styles.button}>
                        <a href="/auth/google"  className={Styles.link}>
                            Login with Google
                        </a>
                    </div>
                    <div className={Styles.button}>Login</div>
                    <div className={Styles.button}>Login</div>
                </nav>
            </>
        );
    }
}

export default Header;
