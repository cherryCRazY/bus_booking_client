import React, { Component } from "react";
import { connect } from "react-redux";

import Admin from "./Admin/Admin";
import User from "./User/User";

function mapStateToProps(state) {
    return {
        auth: state.auth.data
    };
}

class Profile extends Component {
    render() {
        return this.props.auth && this.props.auth.isAdmin ? (
            <Admin data={this.props.data} />
        ) : (
            <User data={this.props.data} />
        );
    }
}

export default connect(mapStateToProps)(Profile);
