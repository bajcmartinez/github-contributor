import {FETCH_ISSUES, RECEIVE_ISSUES} from '../actions/issues';

const defaultState = {
    loading: true,
    list: [],
    totalCount: 0
};

export default function issues (state = defaultState, action) {
    switch (action.type) {
        case FETCH_ISSUES:
            return {
                ...state,
                loading: true
            }
        case RECEIVE_ISSUES:
            return {
                loading: false,
                list: action.payload.items,
                totalCount: action.payload.total_count
            };
        default :
            return state
    }
}