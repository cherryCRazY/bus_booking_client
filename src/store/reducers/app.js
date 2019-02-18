import * as actionTypes from "../actions/actionTypes";
import { fromJS } from "immutable";

const initialState = fromJS({
    busRoute: false,
    tickets: [],
    totalPrice: 0
});

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.FIND_ROUTE: {
            return action.payload
                ? state.set("busRoute", action.payload.data)
                : state.set("busRoute", false);
        }
        case actionTypes.ADD_TICKET: {
            return action.payload
                ? state
                      .set("tickets", action.payload.tickets)
                      .set("totalPrice", action.payload.totalPrice)
                : { ...state };
        }
        case actionTypes.DELETE_TICKET: {
            return action.payload
                ? state
                      .set("tickets", action.payload.tickets)
                      .set("totalPrice", action.payload.totalPrice)
                : { ...state };
        }
        case actionTypes.RESET_TICKET: {
            return state.set("tickets", []).set("totalPrice", 0);
        }
        default: {
            return state;
        }
    }
};
