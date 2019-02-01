import { put, apply } from "redux-saga/effects";
import appAction from "../../actions/appAction";
import axios from "axios";

export function* findRoute({ payload: userData }) {
    try {
        //ui.Spinner start
        
        const findedRoute = yield apply(axios, axios.post, [
            "/api/bus_route",
            userData
        ]);
        yield put(appAction.findRoute(findedRoute));
    } catch (error) {
        //add action for error
        console.log("Somethin wrong \n" + error);
    }
}
