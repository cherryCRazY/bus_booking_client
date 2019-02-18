import * as actionTypes from "../actions/actionTypes";
import { Map } from "immutable";

const initialState = Map({
    usersData: [],
    activeRoutes: [],
    arhiveRoutes: [],
    transport: []
});

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADMIN_GET_ALL_USER: {
            return state.set("usersData", action.payload);
        }
        case actionTypes.DELETE_USER: {
            return state.set(
                "usersData",
                state
                    .get("usersData")
                    .filter(el => !(el._id === action.user._id))
            );
        }
        case actionTypes.GET_ALL_ACTIVE_ROUTES: {
            return state.set("activeRoutes", action.payload);
        }
        case actionTypes.GET_ALL_TRANSPORT: {
            return state.set("transport", action.payload);
        }
        default: {
            return state;
        }
    }
};
