import { put, apply, delay } from "redux-saga/effects";
import appAction from "../../actions/appAction";
import uiAction from "../../actions/uiAction";
import axios from "axios";

export function* findRoute({ payload }) {
    try {
        yield put(uiAction.startFetching());

        const findedRoute = yield apply(axios, axios.post, [
            "/api/bus_route",
            payload
        ]);

        yield put(appAction.findRoute(findedRoute));
    } catch (error) {
        yield put(uiAction.showErrorFetching(error.message));
        yield put(uiAction.hideErrorFetching(error.message));
    } finally {
        yield put(uiAction.stopFetching());
    }
}

export function* sendTickets({ tickets }) {
    try {
        yield put(uiAction.startFetching());

        const userTickets = tickets.map(ticket => {
            const { id, numberOfSeat, price } = ticket.seat;

            return {
                _id: id,
                numberOfSeat,
                price,
                seatTaken: true
            };
        });

        yield apply(axios, axios.post, [
            "/api/user_tickets",
            { tickets: userTickets }
        ]);

        yield put(uiAction.showSussesLabel());
        yield put(uiAction.hideSussesLabel());

        const { fromCity, toCity, dateStart } = tickets[0].seat;

        yield put(appAction.findRouteAsync({ fromCity, toCity, dateStart }));
        yield put(appAction.resetTickets());
    } catch (error) {
        yield put(uiAction.showErrorFetching(error.message));
        yield delay(130);
        yield put(uiAction.hideErrorFetching(error.message));
    } finally {
        yield put(uiAction.stopFetching());
    }
}
