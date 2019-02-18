import { watcherUser } from "./watchers/watcherUser";
import { watcherApp } from "./watchers/watcherApp";
import watcherAdmin from "./watchers/watcherAdmin";
import { all, call } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([call(watcherUser), call(watcherApp), call(watcherAdmin)]);
}
