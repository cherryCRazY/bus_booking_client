import React, { Component } from "react";
import Styles from "./styles.module.scss";
import Search from "../Search/Search";

class Dashboard extends Component {
    render() {
        return (
            <main className={Styles.bus}>
                <div className={Styles.title}>travel with us</div>
                <Search />
            </main>
        );
    }
}

export default Dashboard;
