import { combineReducers } from "redux";
import authReducer from "./auth";
import uiReducer from "./ui";
import appReducer from "./app";
import admin from "./admin";

export default combineReducers({
    auth: authReducer,
    ui: uiReducer,
    app: appReducer,
    admin: admin
});
