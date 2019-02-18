import { takeEvery, all, call } from "redux-saga/effects";
import {
    ADMIN_LOGIN,
    DELETE_USER_ASYNC,
    DELETE_ROUTE_ASYNC,
    SET_NEW_ROUTE
} from "../../actions/actionTypes";
import {
    adminLogin,
    deleteUser,
    deleteRoute,
    setNewRoute
} from "../workers/admin";

function* watcheAdmin() {
    yield takeEvery(ADMIN_LOGIN, adminLogin);
}
function* watcheDeleteRoute() {
    yield takeEvery(DELETE_ROUTE_ASYNC, deleteRoute);
}
function* watcheDeleteUser() {
    yield takeEvery(DELETE_USER_ASYNC, deleteUser);
}
function* watcheNewRoute() {
    yield takeEvery(SET_NEW_ROUTE, setNewRoute);
}

export default function* watcherAdmin() {
    yield all([
        call(watcheAdmin),
        call(watcheDeleteUser),
        call(watcheNewRoute),
        call(watcheDeleteRoute)
    ]);
}
