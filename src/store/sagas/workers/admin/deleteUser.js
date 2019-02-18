import { put, apply, delay } from "redux-saga/effects";
import uiAction from "../../../actions/uiAction";
import adminAction from "../../../actions/adminAction";
import axios from "axios";

export function* deleteUser({ user }) {
    try {
        yield put(uiAction.startFetching());
        yield put(adminAction.deleteUser(user));
        yield apply(axios, axios.delete, ["/admin/user", { data: user }]);
        yield put(uiAction.showSussesLabel("The user has been deleted"));
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
