//Core
import React, { Component } from "react";

//Antd design
import { Steps, Icon, Button } from "antd";

//Components
import TripSeats from "./TripsSeats/TripSeats";

//Styles
import Styles from "./styles.module.scss";

//Itils
import moment from "moment";

class TripItem extends Component {
    state = {
        showPlaces: false
    };
    handlerChange = () => {
        const { showPlaces } = this.state;
        this.setState({
            showPlaces: !showPlaces
        });
    };
    render() {
        const { fromCity, toCity, dateStart, dateFinish } = this.props;

        const start = moment(dateStart);
        const finish = moment(dateFinish);

        const Step = Steps.Step;
        const duration = moment.duration(start.diff(finish));
        const fullDuration = duration.humanize();
        return (
            <>
                <section className={Styles.TripItem}>
                    <div>
                        <div className={Styles.time}>
                            {start.format("HH:mm")}
                        </div>

                        <div className={Styles.date}>
                            <div>{start.format("dddd")}</div>

                            {start.format("DD MMMM")}
                        </div>
                        <div>{fromCity}</div>
                    </div>
                    <Steps current={1}>
                        <Step status="finish" title={fromCity} />
                        <Step
                            description={fullDuration}
                            status="finish"
                            icon={<Icon type="car" theme="filled" />}
                        />
                        <Step
                            title=""
                            status="finish"
                            description={toCity}
                            icon={<Icon type="arrow-right" />}
                        />
                    </Steps>

                    <div>
                        <div className={Styles.time}>
                            {finish.format("HH:mm")}
                        </div>
                        <div>
                            <div className={Styles.date}>
                                {finish.format("dddd")}
                            </div>
                            {finish.format("DD MMMM")}
                        </div>
                        <div>{toCity}</div>
                        <Button type="primary" onClick={this.handlerChange}>
                            Choose seat
                        </Button>
                    </div>
                </section>

                {this.state.showPlaces ? <TripSeats {...this.props} /> : null}
            </>
        );
    }
}

export default TripItem;
