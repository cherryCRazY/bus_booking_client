import { put, call, apply } from "redux-saga/effects";
import { FETCH_USER } from "../../actions/actionTypes";
import axios from "axios";

export default function* fetchUser() {
    const payload = yield call(axios, axios.get, "/api/current_user");
    yield put({ type: FETCH_USER, payload });
}
