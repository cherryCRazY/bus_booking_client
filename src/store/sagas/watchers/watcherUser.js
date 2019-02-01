import { takeEvery } from "redux-saga/effects";
import { fetchUser } from "../workers/user";
import { FETCH_USER_ASYNC } from "../../actions/actionTypes";

export function* watcherUser() {
    yield takeEvery(FETCH_USER_ASYNC, fetchUser);
}
