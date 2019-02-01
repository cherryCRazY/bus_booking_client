import { watcherUser } from "./watchers/watcherUser";
import { watcherApp } from "./watchers/watcherApp";
import { all, call } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([call(watcherUser), call(watcherApp)]);
}
