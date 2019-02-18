import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import adminAction from "../../../../store/actions/adminAction";

import success from "../../../UI/Modal/success";
import error from "../../../UI/Modal/error";

import {
    Form,
    Input,
    DatePicker,
    TimePicker,
    Select,
    InputNumber,
    Button,
    Spin,
    Skeleton
} from "antd";

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        sm: { span: 2 }
    },
    wrapperCol: {
        sm: { span: 5 }
    }
};

class NewRoute extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                const newRoute = {
                    fromCity: values.From,
                    toCity: values.To,
                    dateStart: new Date(
                        moment(
                            values.datePickerStart.format("MM/DD/YYYY ") +
                                values.timePickerStart.format("HH:mm:ss")
                        ).format("MM/DD/YYYY HH:mm:ss")
                    ).toString(),
                    dateFinish: new Date(
                        moment(
                            values.datePickerFinish.format("MM/DD/YYYY ") +
                                values.timePickerFinish.format("HH:mm:ss")
                        ).format("MM/DD/YYYY HH:mm:ss")
                    ).toString(),
                    price: values.Price,
                    bus: {
                        id: values.select
                    }
                };
                this.props.onSetRoute(newRoute);
            }
            console.log("Received values of form: ", values);
        });
    };
    render() {
        const config = {
            rules: [
                {
                    type: "object",
                    required: true,
                    message: "Please select time!"
                }
            ]
        };
        console.log(this.props);
        const { getFieldDecorator } = this.props.form;
        const {
            isFetching,
            successLabel,
            errorLabel,
            successMessage,
            errorMessage
        } = this.props;
        return (
            <>
                {successLabel ? success(successMessage) : null}
                {errorLabel ? error(errorMessage) : null}
                {isFetching ? (
                    <Spin tip="Loading...">
                        <Skeleton />
                    </Spin>
                ) : (
                    <Form
                        onSubmit={this.handleSubmit}
                        layout="vertical"
                        style={{
                            border: "1px solid rgba(0, 0, 0, 0.15)",
                            padding: "2vh",
                            backgroundColor: "#fff"
                        }}
                    >
                        <div
                            style={{
                                transform: "translate(32%)"
                            }}
                        >
                            <Form.Item
                                {...formItemLayout}
                                label="From"
                                hasFeedback
                            >
                                {getFieldDecorator("From", {
                                    rules: [
                                        {
                                            required: true,
                                            message:
                                                "Please input city where route start"
                                        }
                                    ]
                                })(
                                    <Input placeholder="Please input where route start" />
                                )}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                label="To"
                                hasFeedback
                            >
                                {getFieldDecorator("To", {
                                    rules: [
                                        {
                                            required: true,
                                            message:
                                                "Please input city where route ends"
                                        }
                                    ]
                                })(
                                    <Input placeholder="Please input where route ends" />
                                )}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                label="Start date"
                                hasFeedback
                            >
                                {getFieldDecorator("datePickerStart", config)(
                                    <DatePicker
                                        disabledDate={e =>
                                            moment(new Date()).add(-1, "days") >
                                            e
                                        }
                                    />
                                )}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                label="Start time"
                                hasFeedback
                            >
                                {getFieldDecorator("timePickerStart", config)(
                                    <TimePicker format="HH:mm" />
                                )}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                label="End date"
                                hasFeedback
                            >
                                {getFieldDecorator("datePickerFinish", config)(
                                    <DatePicker
                                        disabledDate={e =>
                                            moment(new Date()).add(-1, "days") >
                                            e
                                        }
                                    />
                                )}
                            </Form.Item>

                            <Form.Item
                                {...formItemLayout}
                                label="End time"
                                hasFeedback
                            >
                                {getFieldDecorator("timePickerFinish", config)(
                                    <TimePicker format="HH:mm" />
                                )}
                            </Form.Item>

                            <Form.Item
                                {...formItemLayout}
                                label="Price"
                                hasFeedback
                            >
                                {getFieldDecorator("Price", {
                                    initialValue: 60
                                })(<InputNumber min={0} max={1000000} />)}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                label="Select"
                                hasFeedback
                            >
                                {getFieldDecorator("select", {
                                    rules: [
                                        {
                                            required: true,
                                            message:
                                                "Please select your country!"
                                        }
                                    ]
                                })(
                                    <Select placeholder="Please select a bus">
                                        {this.props.transport.map(t => (
                                            <Option
                                                key={t._id}
                                                value={t._id}
                                            >{`${t.name} - ${
                                                t.stateCarNumber
                                            }`}</Option>
                                        ))}
                                    </Select>
                                )}
                            </Form.Item>
                            <Form.Item {...formItemLayout} label="  ">
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                )}
            </>
        );
    }
}
const mapStateToProps = state => ({
    transport: state.admin.get("transport"),
    isFetching: state.ui.get("isFetching"),
    successLabel: state.ui.get("successLabel"),
    successMessage: state.ui.get("successMessage"),
    errorLabel: state.ui.get("errorLabel"),
    errorMessage: state.ui.get("errorMessage")
});
const mapDispatchToProps = dispatch => ({
    onSetRoute: route => dispatch(adminAction.setNewRoute(route))
});

const WrappedApp = Form.create({ name: "coordinated" })(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(NewRoute)
);

export default WrappedApp;
