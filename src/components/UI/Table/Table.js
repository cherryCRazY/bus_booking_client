import React, { Component } from "react";

import { Table, Spin, Skeleton } from "antd";
import { connect } from "react-redux";

import success from "../Modal/success";
import error from "../Modal/error";

class TableUI extends Component {
    render() {
        const {
            successLabel,
            errorLabel,
            errorMessage,
            isFetching,
            successMessage
        } = this.props;
        return (
            <>
                {isFetching ? (
                    <Spin tip="Loading...">
                        <Skeleton />
                    </Spin>
                ) : (
                    <Table
                        style={{ backgroundColor: "white" }}
                        dataSource={this.props.data}
                        bordered
                        columns={this.props.columns}
                    />
                )}
                {errorLabel && isFetching ? error(errorMessage) : null}
                {successLabel && isFetching ? success(successMessage) : null}
            </>
        );
    }
}

const mapStateToProps = state => ({
    successLabel: state.ui.get("successLabel"),
    errorLabel: state.ui.get("errorLabel"),
    errorMessage: state.ui.get("errorMessage"),
    successMessage: state.ui.get("successMessage"),
    isFetching: state.ui.get("isFetching")
});

export default connect(mapStateToProps)(TableUI);
