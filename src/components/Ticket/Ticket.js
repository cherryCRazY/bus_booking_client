import React from "react";
import Styles from "./styles.module.scss";
import moment from "moment";
import { Button, Icon } from "antd";

const Ticket = props => {
    const { ticket, chooseSeat, show } = props;
    return (
        <li className={show ? Styles.tickets_active : Styles.tickets_passive}>
            {show ? (
                <div>
                    <span>{`${ticket.fromCity}-${ticket.toCity} at ${moment(
                        ticket.dateStart
                    ).format("HH:mm")} | `}</span>
                    <span>Seat : {ticket.numberOfSeat}</span>
                </div>
            ) : null}
            <div>
                {!show ? (
                    <span>
                        <Icon height={"4vh"} width={"4vw"} type="idcard" />
                    </span>
                ) : (
                    <span className={Styles.tickets_price}>
                        Price : {ticket.price}
                    </span>
                )}
                <Button
                    type="danger"
                    shape="circle"
                    style={{ color: "rgb(0, 21, 41)" }}
                    onClick={() => chooseSeat(ticket)}
                    icon="delete"
                />
            </div>
        </li>
    );
};

export default Ticket;
