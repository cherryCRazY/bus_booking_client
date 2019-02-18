import { put, apply, delay } from "redux-saga/effects";
import uiAction from "../../../actions/uiAction";
import adminAction from "../../../actions/adminAction";
import axios from "axios";

export function* deleteRoute({ route }) {
    try {
        console.log(route);
        yield put(uiAction.startFetching());
        yield put(adminAction.deleteRoute(route));
        yield apply(axios, axios.delete, ["/admin/routes", { data: route }]);
        yield put(uiAction.showSussesLabel("The route has been deleted"));
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
