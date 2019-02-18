import * as actionTypes from "./actionTypes";

export default {
    startFetching: () => ({
        type: actionTypes.START_FETCHING
    }),
    stopFetching: () => ({
        type: actionTypes.STOP_FETCHING
    }),
    showSussesLabel: message => ({
        type: actionTypes.SHOW_SUCCES_LABEL,
        payload: message
    }),
    hideSussesLabel: () => ({
        type: actionTypes.HIDE_SUCCES_LABEL
    }),
    showErrorFetching: message => ({
        type: actionTypes.SHOW_ERROR_FETCHING,
        payload: message
    }),
    hideErrorFetching: () => ({
        type: actionTypes.HIDE_ERROR_FETCHING
    })
};
