import React, { Component } from "react";
import Select from "react-select";
import Date from "../UI/Date/Date";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import EventIcon from "@material-ui/icons/Event";
import Styles from "./styles.module.scss";
import Spinner from "../UI/Spinner/Spinner";

import appAction from "../../store/actions/appAction";
import { connect } from "react-redux";
import { Link } from "react-scroll";

const options = [
    { value: "Berezne", label: "Berezne" },
    { value: "Rivne", label: "Rivne" },
    { value: "Kiev", label: "Kiev" },
    { value: "Moscow", label: "Moscow" },
    { value: "Odessa", label: "Odessa" }
];

class Search extends Component {
    state = {
        fromCity: null,
        toCity: null,
        date: null,
        valid: true
    };
    handleChangeFromTowm = fromCity => {
        this.setState({ fromCity });
    };
    handleChangeToTown = toCity => {
        this.setState({ toCity });
    };
    handleChangeDate = date => {
        this.setState({ date });
    };

    handleSeach = () => {
        const { onFindRoute } = this.props;
        const { fromCity, toCity, date } = this.state;

        if (fromCity && toCity && date) {
            const payload = {
                fromCity: fromCity.value,
                toCity: toCity.value,
                dateStart: date
            };

            onFindRoute(payload);

            this.setState({ valid: true });
        } else {
            this.setState({ valid: false });
        }
    };

    render() {
        let error;
        const state = { ...this.state };
        const { isFetching } = this.props;

        if (!state.valid) {
            const fields = Object.keys(state).filter(el =>
                state[el] === null
                    ? ((error = { ...error, [el]: true }), true)
                    : false
            );
            error = {
                ...error,
                error: () =>
                    fields.length > 0 ? (
                        <div
                            className={Styles.Error}
                        >{`You must input field :${fields
                            .join(",")
                            .toLowerCase()}`}</div>
                    ) : null
            };
        }

        return (
            <>
                {isFetching ? <Spinner /> : null}
                <div className={Styles.container}>
                    <div className={Styles.find}>
                        <div className={Styles.selectContainer}>
                            <div className={Styles.box}>
                                <Select
                                    className={Styles.Select}
                                    onChange={this.handleChangeFromTowm}
                                    options={options}
                                    placeholder=" FROM  "
                                />
                                <MyLocationIcon
                                    fontSize="large"
                                    color={
                                        error && error.fromCity
                                            ? "error"
                                            : "inherit"
                                    }
                                />
                            </div>
                            <div className={Styles.box}>
                                <Select
                                    className={Styles.Select}
                                    onChange={this.handleChangeToTown}
                                    options={options}
                                    placeholder=" TO"
                                />
                                <LocationOnIcon
                                    fontSize="large"
                                    color={
                                        error && error.toCity
                                            ? "error"
                                            : "inherit"
                                    }
                                />
                            </div>
                            <div className={Styles.dataContainer}>
                                <Date handlerChange={this.handleChangeDate} />
                                <EventIcon
                                    color={
                                        error && error.date
                                            ? "error"
                                            : "inherit"
                                    }
                                />
                            </div>
                        </div>
                        {error && error.error()}
                    </div>
                    <Link
                        className={Styles.button}
                        to={"tickets"}
                        spy={true}
                        smooth={true}
                        onClick={this.handleSeach}
                    >
                        Search
                    </Link>
                </div>
            </>
        );
    }
}
const mapStateToProps = state => ({
    isFetching: state.ui.get("isFetching")
});

const mapDispatchToProps = dispatch => ({
    onFindRoute: data => dispatch(appAction.findRouteAsync(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
