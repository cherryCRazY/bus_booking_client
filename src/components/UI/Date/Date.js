import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import classes from "./Date.module.scss";

function DatePickers(props) {
    const { handlerChange } = props;
    return (
        <form className={classes.container}>
            <TextField
                id="date"
                label="Choose the date"
                type="date"
                name="date"
                onChange={e => handlerChange(e.target.value)}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true
                }}
            />
        </form>
    );
}

export default DatePickers;
