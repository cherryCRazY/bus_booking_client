import React, { Component } from "react";
import Styles from "./styles.module.scss";
import Search from "../Search/Search";
import Trips from "../Trips/Trips";
import Header from "../Header/Header";
import { Element } from "react-scroll";
import { connect } from "react-redux";

class Dashboard extends Component {
    render() {
        console.log(this.props.busRoute);
        return (
            <>
                <Header />
                <main className={Styles.bus}>
                    <div className={Styles.title}>travel with us</div>
                    <Search />
                </main>
                <Element id="tickets">
                    {this.props.app.busRoute ? <Trips /> : null}
                </Element>
            </>
        );
    }
}
const mapStateToProps = state => ({
    app: state.app.toJS()
});

export default connect(mapStateToProps)(Dashboard);
