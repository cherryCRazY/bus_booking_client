import { put, apply, delay } from "redux-saga/effects";
import uiAction from "../../../actions/uiAction";
import adminAction from "../../../actions/adminAction";
import axios from "axios";

export function* setNewRoute({ payload }) {
    try {
        console.log(payload);
        yield put(uiAction.startFetching());
        yield apply(axios, axios.post, ["/admin/bus_route", { ...payload }]);
        yield put(uiAction.showSussesLabel("The route has been set  up"));
        yield put(uiAction.hideSussesLabel());
    } catch (error) {
        yield put(uiAction.showErrorFetching(error.message));
        yield delay(500);
        yield put(uiAction.hideErrorFetching());
    } finally {
        yield put(adminAction.adminLogin());
        yield put(uiAction.stopFetching());
    }
}
