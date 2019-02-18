import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const { Header, Sider, Content } = Layout;

class Profile extends Component {
    state = {
        collapsed: false
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                    >
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>Users</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="database" />
                            <span>History</span>
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
                    <Content
                        style={{
                            margin: "24px 16px",
                            padding: 24,
                            background: "#fff",
                            minHeight: 100
                        }}
                    >
                        <BrowserRouter>
                            <Switch>
                                {/* <Route path="/lol" exact component={Trips} />
                                <Route path="/kek" exact component={Search} /> */}
                            </Switch>
                        </BrowserRouter>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Profile;
