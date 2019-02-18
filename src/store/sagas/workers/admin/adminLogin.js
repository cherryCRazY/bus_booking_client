//Core
import { put, apply, all } from "redux-saga/effects";

//Actions
import uiAction from "../../../actions/uiAction";
import adminAction from "../../../actions/adminAction";

//Itils
import axios from "axios";

//* apply(context, method, arrayOfArguments)

//* put -> dispatch
export function* adminLogin() {
    try {
        yield put(uiAction.startFetching());

        //running tasks in parallel
        const [usersData, routes, transport] = yield all([
            apply(axios, axios.get, ["/admin/users"]),
            apply(axios, axios.get, ["/admin/routes"]),
            apply(axios, axios.get, ["/admin/buses"])
        ]);

        yield all([
            put(adminAction.adminGetAllUser(usersData)),
            put(adminAction.getAllRoutes(routes)),
            put(adminAction.getAllTransport(transport))
        ]);
    } catch (error) {
        yield put(uiAction.showErrorFetching(error.message));
    } finally {
        yield put(uiAction.stopFetching());
        yield put(uiAction.hideErrorFetching());
    }
}
