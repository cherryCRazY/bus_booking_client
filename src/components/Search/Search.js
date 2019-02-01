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

const options = [
    { value: "Berezne", label: "Berezne" },
    { value: "Rivne", label: "Rivne" },
    { value: "Kiev", label: "Kiev" },
    { value: "Odessa", label: "Odessa" }
];

class Search extends Component {
    state = {
        fromCity: null,
        toCity: null,
        date: null
    };
    handleChangeFromTowm = fromCity => {
        this.setState({ fromCity });
        console.log(`Option selected:`, fromCity);
    };
    handleChangeToTown = toCity => {
        this.setState({ toCity });
        console.log(`Option selected:`, toCity);
    };
    handleChangeDate = date => {
        this.setState({ date });
        console.log(`Option selected:`, date);
    };
    handleSeach = () => {
        const { onFindRoute } = this.props;
        const { fromCity, toCity, date } = this.state;
        const payload = {
            fromCity: fromCity.value,
            toCity: toCity.value,
            date
        };
        onFindRoute(payload);
    };

    render() {
        const { fromTown, toTown } = this.state;

        return true ? (
            <Spinner />
        ) : (
            <div className={Styles.container}>
                <div className={Styles.find}>
                    <div className={Styles.selectContainer}>
                        <div className={Styles.box}>
                            <Select
                                className={Styles.Select}
                                value={fromTown}
                                onChange={this.handleChangeFromTowm}
                                options={options}
                                placeholder=" FROM  "
                            />
                            <MyLocationIcon />
                        </div>
                        <div className={Styles.box}>
                            <Select
                                className={Styles.Select}
                                value={toTown}
                                onChange={this.handleChangeToTown}
                                options={options}
                                placeholder=" TO"
                            />
                            <LocationOnIcon />
                        </div>
                        <div className={Styles.dataContainer}>
                            <Date handlerChange={this.handleChangeDate} />
                            <EventIcon />
                        </div>
                    </div>
                </div>
                <button className={Styles.button} onClick={this.handleSeach}>
                    Search
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onFindRoute: data => dispatch(appAction.findRouteAsync(data))
});

export default connect(
    null,
    mapDispatchToProps
)(Search);
