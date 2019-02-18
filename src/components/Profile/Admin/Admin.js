import React, { Component } from "react";
import { Layout, Menu, Icon, Breadcrumb } from "antd";
import {
    Route,
    Switch,
    NavLink,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

import logo from "../../../assets/images/OVO_LOGO.png";

import Users from "./Users/Users";
import NewRoute from "./NewRoute/NewRoute";
import ActiveTrips from "./ActiveTrips/ActiveTrips";

import { connect } from "react-redux";
import appAction from "../../../store/actions/appAction";

const { Header, Sider, Content } = Layout;

class Admin extends Component {
    state = {
        collapsed: false
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    componentDidMount() {
        this.props.adminLogin();
    }

    render() {
        const { url } = this.props.match;
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <Menu theme="dark" mode="inline">
                        <Menu.Item
                            key="11"
                            style={{
                                height: "50px"
                            }}
                        >
                            <Link to="/">
                                <img
                                    style={{
                                        left: "50%",
                                        transform: "translate(50%)"
                                    }}
                                    alt="logo"
                                    src={logo}
                                    height={50}
                                />
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="1">
                            <NavLink to={url + "/admin/users"}>
                                <Icon type="user" />
                                <span>Users</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to={url + "/admin/active_routes"}>
                                <Icon type="branches" />
                                <span>Active Routes</span>
                            </NavLink>
                        </Menu.Item>

                        <Menu.Item key="4">
                            <NavLink to={url + "/admin/new_route"}>
                                <Icon type="folder-add" />
                                <span>New Route</span>
                            </NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: "#fff", padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={
                                this.state.collapsed
                                    ? "menu-unfold"
                                    : "menu-fold"
                            }
                            onClick={this.toggle}
                        />
                    </Header>
                    <Breadcrumb>
                        <Breadcrumb.Item />
                    </Breadcrumb>
                    <Content
                        style={{
                            margin: "24px 16px",
                            padding: 24,
                            background: "##d9dfdf",
                            minHeight: 100
                        }}
                    >
                        <Switch>
                            <Route
                                path={url + "/admin/users"}
                                exact
                                component={Users}
                            />
                            <Route
                                path={url + "/admin/active_routes"}
                                exact
                                component={ActiveTrips}
                            />
                            <Route
                                path={url + "/admin/new_route"}
                                exact
                                component={NewRoute}
                            />
                            <Redirect to="/profile/admin/users" />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    adminLogin: () => dispatch(appAction.adminLogin())
});

export default withRouter(
    connect(
        null,
        mapDispatchToProps
    )(Admin)
);
