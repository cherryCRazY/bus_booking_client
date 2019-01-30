import React, { Component } from "react";
import Select from "react-select";
import Date from "../UI/Date/Date";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import EventIcon from "@material-ui/icons/Event";
import Styles from "./styles.module.scss";

const options = [
    { value: "Berezne", label: "Berezne" },
    { value: "Rivne", label: "Rivne" },
    { value: "Kiev", label: "Kiev" },
    { value: "Odessa", label: "Odessa" }
];

class Search extends Component {
    state = {
        fromTown: null,
        toTown: null,
        date: null
    };
    handleChangeFromTowm = fromTown => {
        this.setState({ fromTown });
        console.log(`Option selected:`, fromTown);
    };
    handleChangeToTown = toTown => {
        this.setState({ toTown });
        console.log(`Option selected:`, toTown);
    };
    handleChangeDate = date => {
        this.setState({ date });
        console.log(`Option selected:`, date);
    };
    render() {
        const { fromTown, toTown } = this.state;

        return (
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
                <button className={Styles.button}>Search</button>
            </div>
        );
    }
}

export default Search;
