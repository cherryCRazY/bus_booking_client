import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";

import userAction from "./store/actions/userAction";

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/api/current_user" component={Dashboard} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUser: () => dispatch(userAction.fetchUserAsync())
});

export default connect(
    null,
    mapDispatchToProps
)(App);
