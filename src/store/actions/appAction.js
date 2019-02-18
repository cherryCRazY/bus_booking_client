import * as actionTypes from "./actionTypes";

export default {
    findRouteAsync: data => ({
        type: actionTypes.FIND_ROUTE_ASYNC,
        payload: data
    }),

    findRoute: data => ({
        type: actionTypes.FIND_ROUTE,
        payload: data
    }),
    deleteTicket: seat => ({
        type: actionTypes.DELETE_TICKET,
        payload: seat
    }),
    addTicket: seat => ({
        type: actionTypes.ADD_TICKET,
        payload: seat
    }),
    sendTickets: tickets => ({
        type: actionTypes.SEND_TICKET,
        tickets
    }),
    resetTickets: () => ({
        type: actionTypes.RESET_TICKET
    }),
    adminLogin: () => ({
        type: actionTypes.ADMIN_LOGIN
    }),
    adminGetAllUser: ({ data }) => ({
        type: actionTypes.ADMIN_GET_ALL_USER,
        payload: data
    })
};
