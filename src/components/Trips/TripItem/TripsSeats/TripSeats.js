//Core
import React, { Component } from "react";
import { connect } from "react-redux";

//Styles
import Styles from "./styles.module.scss";

//Components
import Seat from "./Seat/Seat";

class TripSeats extends Component {
    handlerSeats = () => {
        const { data } = this.props;
        const { tickets } = this.props.appState;
        console.log(this.props);
        return data.places.map(e => (
            <Seat
                id={e._id}
                active={
                    tickets && tickets.some(place => place.seat.id === e._id)
                }
                handlerChooseSeats={this.props.handlerChooseSeats}
                key={e._id}
                taken={e.seatTaken}
                price={e.price}
                numberOfSeat={e.numberOfSeat}
                toCity={this.props.toCity}
                fromCity={this.props.fromCity}
                dateStart={this.props.dateStart}
                dateFinish={this.props.dateFinish}
            >
                {e.numberOfSeat}
            </Seat>
        ));
    };
    render() {
        return (
            <div className={Styles.gridContainer}>
                <div className={Styles.griMain}>
                    <ul className={Styles.row}>{this.handlerSeats()}</ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    appState: state.app.toJS()
});

export default connect(mapStateToProps)(TripSeats);
