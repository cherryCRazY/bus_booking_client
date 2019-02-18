//Core
import React from "react";

//Styles
import Styles from "./styles.module.scss";

const Seat = props => {
    const { taken, children, active } = props;
    let classes = [Styles.seat, Styles.free];
    const handlerToggle = () => {
        const {
            id,
            handlerChooseSeats,
            price,
            numberOfSeat,
            dateStart,
            dateFinish,
            toCity,
            fromCity
        } = props;
        handlerChooseSeats({
            id,
            price,
            numberOfSeat,
            dateStart,
            dateFinish,
            toCity,
            fromCity
        });
    };

    classes = active ? [classes[0], Styles.active] : classes;
    classes = taken ? [classes[0], Styles.disable] : classes;

    return (
        <div onClick={handlerToggle} className={classes.join(" ")}>
            {children}
        </div>
    );
};

export default Seat;
