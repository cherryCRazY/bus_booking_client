import React, { Component } from "react";

import { Popconfirm, Tag } from "antd";
import { connect } from "react-redux";
import Table from "../../../UI/Table/Table";
import adminAction from "../../../../store/actions/adminAction";

class Users extends Component {
    render() {
        const { onDeleteUser, usersData } = this.props;

        const columns = [
            {
                title: "Name",
                dataIndex: "name",
                key: "name"
            },
            { title: "Email", dataIndex: "email", key: "email" },
            {
                title: "Phone Number",
                dataIndex: "phoneNumber",
                key: "phoneNumber"
            },
            {
                title: "Tags",
                dataIndex: "tags",
                key: "tags",
                render: tags => (
                    <span>
                        {tags.map(tag => {
                            let color = tag.length > 5 ? "geekblue" : "green";
                            if (tag === "admin") {
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
                                onDeleteUser(
                                    ...usersData.filter(
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
        const data = usersData.map(
            ({ _id, name, email, phoneNumber, isAdmin, googleID }) => ({
                name,
                key: _id,
                email,
                phoneNumber,
                isAdmin,
                googleID,
                tags: [isAdmin ? "admin" : "user"]
            })
        );
        return <Table columns={columns} data={data} />;
    }
}

const mapStateToProps = state => ({
    usersData: state.admin.get("usersData")
});
const mapDispatchToProps = dispatch => ({
    onDeleteUser: user => dispatch(adminAction.deleteUserAsync(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
