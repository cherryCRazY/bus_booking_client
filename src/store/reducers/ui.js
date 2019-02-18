import * as actionTypes from "../actions/actionTypes";
import { Map } from "immutable";

const initialState = Map({
    isFetching: false,
    errorLabel: false,
    successLabel: false,
    successMessage: "",
    errorMessage: ""
});

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_FETCHING: {
            return state.set("isFetching", true);
        }
        case actionTypes.STOP_FETCHING: {
            return state.set("isFetching", false);
        }
        case actionTypes.SHOW_SUCCES_LABEL: {
            return state
                .set("successLabel", true)
                .set("successMessage", action.payload);
        }
        case actionTypes.HIDE_SUCCES_LABEL: {
            return state.set("successLabel", false).set("successMessage", "");
        }
        case actionTypes.SHOW_ERROR_FETCHING: {
            return state
                .set("errorLabel", true)
                .set("errorMessage", action.payload);
        }
        case actionTypes.HIDE_ERROR_FETCHING: {
            return state.set("errorLabel", false).set("errorMessage", "");
        }
        default: {
            return state;
        }
    }
};
