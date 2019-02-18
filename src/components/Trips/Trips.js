//Core
import React, { Component } from "react";
import { connect } from "react-redux";

//images
import logo from "../../assets/images/OVO_LOGO.png";

//Antd Design
import { Button } from "antd";
import { Layout, Breadcrumb, Empty, Affix, Modal } from "antd";

//Store Action
import appAction from "../../store/actions/appAction";

//Components
import Ticket from "../Ticket/Ticket";
import TripItem from "./TripItem/TripItem";
import ModalOrder from "../UI/Modal/Modal";

const { Header, Content, Footer, Sider } = Layout;

class Trips extends Component {
    state = {
        collapsed: true,
        visible: false,
        confirmLoading: false,
        error: false,
        success: false
    };
    showModal = () => {
        this.setState({
            visible: true
        });
    };
    handleCancel = () => {
        this.setState({
            visible: false,
            error: false,
            success: false
        });
    };
    handleCancelConfirm = () => {
        this.setState({
            visible: false,
            confirmLoading: false
        });
    };
    handleOk = () => {
        this.props.onSendTickets(this.props.appState.tickets);
        this.setState({
            confirmLoading: true,
            visible: false
        });
    };
    componentWillUnmount() {
        this.setState({ showResult: false });
    }
    componentWillUpdate() {
        if (this.props.successLabel) {
            this.setState({ success: true });
        }
        if (this.props.errorLabel) {
            this.setState({ error: true });
        }
    }

    success = () => {
        if (this.state.visible || this.state.success) {
            const handleCancel = () => this.handleCancel();

            Modal.success({
                key: "Success",
                title: "Success!!!",
                content: "The tickets have sent to your email ",
                onOk: () => handleCancel()
            });
            this.setState({ success: false });
        } else {
            return;
        }
    };
    error = message => {
        if (this.state.visible || this.state.error) {
            const handleCancel = () => this.handleCancel();

            Modal.error({
                title: "You are not logged in",
                content:
                    message ||
                    "If you would like to buy tickets you must loggin ",
                onOk() {
                    handleCancel();
                }
            });
            this.setState({ error: false });
        } else {
            return;
        }
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };
    handlerChooseSeats = seat => {
        const { onDeleteTicket, onAddTicket } = this.props;
        const { tickets, totalPrice } = this.props.appState;

        const includes =
            tickets.filter(e => e.seat.id === seat.id).length > 0
                ? true
                : false;
        let obj;

        if (includes) {
            obj = {
                tickets: tickets.filter(place => !(place.seat.id === seat.id)),
                totalPrice: totalPrice - seat.price
            };
            onDeleteTicket({ ...obj });
        } else {
            onAddTicket({
                tickets: [...tickets, { seat: { ...seat } }],
                totalPrice: totalPrice + seat.price
            });
        }
    };

    handlerChoosedPlaces = (show = !this.state.collapsed) => {
        const { tickets } = this.props.appState;
        return tickets.map(ticket => (
            <Ticket
                key={ticket.seat.id}
                ticket={ticket.seat}
                show={show}
                chooseSeat={this.handlerChooseSeats}
            />
        ));
    };

    render() {
        const size = this.props.appState.tickets.length;
        const tickets = (
            <div>
                <ul>{this.handlerChoosedPlaces()}</ul>
                <Button
                    type="danger"
                    style={{
                        left: "50%",
                        transform: "translate(-50%)"
                    }}
                    onClick={this.showModal}
                    icon="shopping"
                >
                    {!this.state.collapsed ? "Choose tickets" : null}
                </Button>
            </div>
        );

        return (
            <>
                {this.state.error
                    ? this.error(
                          "Server not answering:check you network connection"
                      )
                    : null}
                {this.state.success ? this.success() : null}
                {this.props.auth ? (
                    <ModalOrder
                        visible={this.state.visible}
                        handleOk={this.handleOk}
                        confirmLoading={this.state.confirmLoading}
                        handleCancel={this.handleCancel}
                        tickets={this.handlerChoosedPlaces(true)}
                    />
                ) : (
                    this.error()
                )}
                <Layout style={{ minHeight: "100vh" }}>
                    <Sider
                        collapsible
                        width="25vw"
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                        ref={node => {
                            this.container = node;
                        }}
                        style={{
                            paddingTop: "15vh"
                        }}
                    >
                        {size > 0 ? (
                            <>
                                <img alt="logo" src={logo} height={50} />
                                {tickets}
                            </>
                        ) : null}
                    </Sider>
                    <Layout>
                        <Header style={{ background: "#fff", padding: 0 }} />
                        <Content style={{ margin: "0 16px" }}>
                            <Breadcrumb
                                style={{
                                    margin: "16px 0",
                                    fontSize: "1.5rem",
                                    fontFamily: "Bad Script, cursive"
                                }}
                            >
                                <Breadcrumb.Item>
                                    {this.props.appState.busRoute.length ? (
                                        <strong style={{ fontSize: "3rem" }}>
                                            {
                                                this.props.appState.busRoute
                                                    .length
                                            }
                                        </strong>
                                    ) : (
                                        0
                                    )}{" "}
                                    buses have been found
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <div
                                style={{
                                    padding: 24,
                                    background: "#fff",
                                    minHeight: 360,
                                    display: "grid",
                                    gridGap: "2vh"
                                }}
                            >
                                {this.props.appState.busRoute.length === 0 ? (
                                    <Empty
                                        image={
                                            "https://cs8.pikabu.ru/post_img/big/2017/03/14/10/1489511541150851308.jpg"
                                        }
                                        width={300}
                                        description={<span>Not found</span>}
                                        style={{ fontSize: "3vmin" }}
                                    >
                                        Sorry but no one route was found
                                    </Empty>
                                ) : null}
                                {this.props.appState.busRoute
                                    ? this.props.appState.busRoute.map(e => (
                                          <TripItem
                                              key={e._id}
                                              data={e.bus}
                                              dateFinish={e.dateFinish}
                                              dateStart={e.dateStart}
                                              fromCity={e.fromCity}
                                              toCity={e.toCity}
                                              handlerChooseSeats={
                                                  this.handlerChooseSeats
                                              }
                                          />
                                      ))
                                    : null}
                            </div>
                        </Content>
                        <Footer style={{ textAlign: "center" }}>
                            More information you can check in my
                            <a href="https://github.com/cherryCRazY">
                                {" "}
                                gitHub!!
                            </a>
                            <img
                                alt="cherry"
                                height={"50px"}
                                src="https://image.flaticon.com/icons/svg/1443/1443591.svg"
                            />
                        </Footer>
                    </Layout>
                </Layout>
            </>
        );
    }
}

const mapStateToProps = state => ({
    appState: state.app.toJS(),
    auth: state.auth.data,
    isFetching: state.ui.get("isFetching"),
    successLabel: state.ui.get("successLabel"),
    errorLabel: state.ui.get("errorLabel")
});
const mapDispatchToProps = dispatch => ({
    onAddTicket: tickets => dispatch(appAction.addTicket(tickets)),
    onDeleteTicket: tickets => dispatch(appAction.deleteTicket(tickets)),
    onSendTickets: tickets => dispatch(appAction.sendTickets(tickets))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Trips);
