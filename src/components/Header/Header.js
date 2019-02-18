import React, { Component } from "react";
import Styles from "./styles.module.scss";
import logo from "../../assets/images/OVO_LOGO.png";
import { NavLink } from "react-router-dom";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

import { connect } from "react-redux";

class Header extends Component {
    handleHeaderContent() {
        const data = this.props.data;

        switch (data) {
            case undefined: {
                return;
            }
            case false: {
                return [
                    <a
                        href="https://www.google.com/"
                        key="1"
                        className={Styles.headerItem}
                    >
                        Help
                    </a>,
                    <a
                        className={Styles.headerItem}
                        key="2"
                        href="/auth/google"
                    >
                        Login with Google
                    </a>
                ];
            }
            default: {
                return [
                    <NavLink
                        to="/profile"
                        key="1"
                        className={Styles.headerItem}
                    >
                        <AccountBoxIcon />
                        Profile
                    </NavLink>,
                    <a
                        className={Styles.headerItem}
                        key="2"
                        href="/auth/google/logout"
                    >
                        Logout
                    </a>
                ];
            }
        }
    }
    render() {
        return (
            <>
                <nav className={Styles.Header}>
                    <div>
                        <NavLink to="/">
                            <img src={logo} alt="logo" className={Styles.img} />
                        </NavLink>
                    </div>
                    <div>{this.handleHeaderContent()}</div>
                </nav>
            </>
        );
    }
}
const mapStateToProps = state => ({
    data: state.auth.data
});

export default connect(mapStateToProps)(Header);
