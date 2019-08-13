const initialState = {
    dataList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
}

const data = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SCORE_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'GET_SCORES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'GET_SCORES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                dataList: action.payload.data.result
            };

        default:
            return state;
    }
}

export default data;          