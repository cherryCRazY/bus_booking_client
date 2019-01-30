import * as actionTypes from "../actions/actionTypes";

const defaultState = {};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER: {
            console.log(action);
            return action.payload
                ? { ...state, data: action.payload }
                : { ...state, data: false };
        }
        default: {
            return state;
        }
    }
};
