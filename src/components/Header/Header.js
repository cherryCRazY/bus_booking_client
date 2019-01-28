import React, { Component } from "react";
import Styles from "./Header.module.scss";
import logo from "../../assets/images/OVO_LOGO.png";

class Header extends Component {
    render() {
        return (
            <>
                <nav className={Styles.Header}>
                    <img src={logo} />
                    <div className={Styles.button}>Login</div>
                    <div className={Styles.button}>Login</div>
                    <div className={Styles.button}>Login</div>
                </nav>
            </>
        );
    }
}

export default Header;
