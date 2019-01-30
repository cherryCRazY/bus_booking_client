import React, { Component } from "react";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <>
                    <Header />

                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/api/current_user" component={Dashboard} />
                        <Route path="/api" component={Dashboard} />
                    </Switch>
                </>
            </BrowserRouter>
        );
    }
}

export default App;
