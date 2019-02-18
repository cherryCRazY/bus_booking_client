import React from "react";
import { DatePicker } from "antd";
import moment from "moment";

function DatePickers(props) {
    const { handlerChange } = props;
    const dateFormat = "YYYY/MM/DD";
    return (
        <div>
            <DatePicker
                disabledDate={e => moment(new Date()).add(-1, "days") > e}
                showTime
                style={{ width: "10vw" }}
                format={dateFormat}
                onChange={e => (e ? handlerChange(e.toDate()) : console.log(e))}
            />
        </div>
    );
}

export default DatePickers;
