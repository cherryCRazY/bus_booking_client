import * as actionTypes from "./actionTypes";

export default {
    adminLogin: () => ({
        type: actionTypes.ADMIN_LOGIN
    }),
    adminGetAllUser: ({ data }) => ({
        type: actionTypes.ADMIN_GET_ALL_USER,
        payload: data
    }),
    deleteUser: user => ({
        type: actionTypes.DELETE_USER,
        user
    }),
    deleteUserAsync: user => ({
        type: actionTypes.DELETE_USER_ASYNC,
        user
    }),
    deleteRoute: route => ({
        type: actionTypes.DELETE_ROUTE,
        route
    }),
    deleteRouteAsync: route => ({
        type: actionTypes.DELETE_ROUTE_ASYNC,
        route
    }),
    getAllRoutes: ({ data }) => ({
        type: actionTypes.GET_ALL_ACTIVE_ROUTES,
        payload: data
    }),
    getAllTransport: ({ data }) => ({
        type: actionTypes.GET_ALL_TRANSPORT,
        payload: data
    }),
    setNewRoute: ( data ) => ({
        type: actionTypes.SET_NEW_ROUTE,
        payload: data
    }),

};
