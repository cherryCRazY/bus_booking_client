import * as actionTypes from "./actionTypes";

export default {
    fetchUserAsync: () => ({
        type: actionTypes.FETCH_USER_ASYNC
    }),
    fetchUser: ({ data }) => ({
        type: actionTypes.FETCH_USER,
        payload: data
    })
};
