import * as actionTypes from "./actionTypes";

export default {
    findRouteAsync: data => ({
        type: actionTypes.FIND_ROUTE_ASYNC,
        payload: data
    }),

    findRoute: data => ({
        type: actionTypes.FIND_ROUTE,
        payload: data
    })
};
