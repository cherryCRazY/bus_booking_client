import { takeEvery } from "redux-saga/effects";
import { findRoute } from "../workers/app";
import { FIND_ROUTE_ASYNC } from "../../actions/actionTypes";

export function* watcherApp() {
    yield takeEvery(FIND_ROUTE_ASYNC, findRoute);
}
