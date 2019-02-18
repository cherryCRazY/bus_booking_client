import React, { Component } from "react";

import { Popconfirm, Tag } from "antd";
import Table from "../../../UI/Table/Table";
import adminAction from "../../../../store/actions/adminAction";

import moment from "moment";

import { connect } from "react-redux";

class ActiveTrips extends Component {
    render() {
        const { onDeleteRoute, activeRoutes } = this.props;
        const columns = [
            {
                title: "From",
                dataIndex: "fromCity",
                key: "fromCity"
            },
            { title: "To", dataIndex: "toCity", key: "toCity" },
            {
                title: "Start",
                dataIndex: "dateStart",
                key: "dateStart"
            },
            {
                title: "Finish",
                dataIndex: "dateFinish",
                key: "dateFinish"
            },
            {
                title: "Price",
                dataIndex: "price",
                key: "price"
            },
            {
                title: "Seat",
                dataIndex: "seat",
                key: "seat"
            },
            {
                title: "Tags",
                dataIndex: "tags",
                key: "tags",
                render: tags => (
                    <span>
                        {tags.map(tag => {
                            let color = "green";
                            if (tag === "full") {
                                color = "volcano";
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </span>
                )
            },
            {
                title: "Action",
                key: "action",
                render: (text, record) => (
                    <span>
                        <Popconfirm
                            title="Sure to delete?"
                            onConfirm={() =>
                                onDeleteRoute(
                                    ...activeRoutes.filter(
                                        el => el._id === record.key
                                    )
                                )
                            }
                        >
                            <a>Delete </a>
                        </Popconfirm>
                    </span>
                )
            }
        ];
        const data = activeRoutes.map(
            ({ toCity, fromCity, dateStart, dateFinish, price, _id, bus }) => {
                const seatTaken = bus.places.reduce(
                    (acc, seat) => acc + seat.seatTaken,
                    0
                );
                const allSeats = bus.places.length;
                return {
                    key: _id,
                    tags: [seatTaken === allSeats ? "full" : "not full"],
                    seat: `${seatTaken}/${allSeats} `,
                    toCity,
                    fromCity,
                    dateStart: moment(dateStart).format("DD/MM - HH:mm"),
                    dateFinish: moment(dateFinish).format("DD/MM - HH:mm"),
                    price
                };
            }
        );

        return <Table columns={columns} data={data} />;
    }
}
const mapStateToProps = state => ({
    activeRoutes: state.admin.get("activeRoutes")
});

const mapDispatchToProps = dispatch => ({
    onDeleteRoute: route => dispatch(adminAction.deleteRouteAsync(route))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActiveTrips);
