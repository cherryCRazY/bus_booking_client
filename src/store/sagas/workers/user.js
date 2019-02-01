import { put, call, apply } from "redux-saga/effects";
import userAction from "../../actions/userAction";
import axios from "axios";

export function* fetchUser() {
    const payload = yield apply(axios, axios.get, ["/api/current_user"]);

    yield put(userAction.fetchUser(payload));
}
