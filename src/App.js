import React, { Component } from "react";
import Styles from "./App.module.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <>
                    <Header />
                    <div className={Styles.bus} />

                    <Switch>
                        <Route path="/" component={Header} />
                    </Switch>
                </>
            </BrowserRouter>
        );
    }
}

export default App;
