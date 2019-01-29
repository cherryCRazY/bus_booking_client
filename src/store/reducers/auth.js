const defaultState = {};

export default (state = defaultState, action) => {
    console.log(action);
    switch (action.type) {
        // case actionTypes.FETCH_USER: {
        //     return action.payload
        //         ? { ...state, data: action.payload }
        //         : { ...state, data: false };
        // }
        default: {
            return state;
        }
    }
};
