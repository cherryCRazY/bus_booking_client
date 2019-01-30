import React, { Component } from "react";
import Styles from "./styles.module.scss";
import logo from "../../assets/images/OVO_LOGO.png";
import { NavLink } from "react-router-dom";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

import { connect } from "react-redux";

class Header extends Component {
    handleHeaderContent() {
        const data = this.props.data;
        console.log(data);

        switch (data) {
            case undefined: {
                console.log("1");
                return;
            }
            case false: {
                return [
                    <NavLink to="/help" key="1" className={Styles.button}>
                        Help
                    </NavLink>,
                    <a className={Styles.button} key="2" href="/auth/google">
                        Login with Google
                    </a>
                ];
            }
            default: {
                return [
                    <NavLink to="/user" key="1" className={Styles.button}>
                        <AccountBoxIcon />
                        Profile
                    </NavLink>,
                    <a
                        className={Styles.button}
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
                    <NavLink to="/">
                        <img src={logo} alt="logo" className={Styles.img} />
                    </NavLink>
                    <NavLink to="/" className={Styles.button}>
                        Home
                    </NavLink>

                    {this.handleHeaderContent()}
                </nav>
            </>
        );
    }
}
const mapStateToProps = state => ({
    data: state.auth.data
});

export default connect(mapStateToProps)(Header);
