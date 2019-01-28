import React, { Component } from "react";
import Styles from "./App.module.scss";
import Header from "./components/Header/Header";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <div className={Styles.bus} />
            </>
        );
    }
}

export default App;
