import { takeEvery, all, call } from "redux-saga/effects";
import { findRoute, sendTickets } from "../workers/app";
import { FIND_ROUTE_ASYNC, SEND_TICKET } from "../../actions/actionTypes";

function* watchRoute() {
    yield takeEvery(FIND_ROUTE_ASYNC, findRoute);
}
function* watcheTicket() {
    yield takeEvery(SEND_TICKET, sendTickets);
}

export function* watcherApp() {
    yield all([call(watchRoute), call(watcheTicket)]);
}
