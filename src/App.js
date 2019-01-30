import React, { Component } from "react";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
    componentDidMount() {
        console.log("keko");
        this.props.fetchUser();
    }
    render() {
        return (
            <BrowserRouter>
                <>
                    <Header />

                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/api/current_user" component={Dashboard} />
                        <Route path="/user" component={Dashboard} />
                    </Switch>
                </>
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUser: () => dispatch({ type: "fetch_user_async" })
});

export default connect(
    null,
    mapDispatchToProps
)(App);
