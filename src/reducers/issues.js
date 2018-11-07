import { RECEIVE_ISSUES } from '../actions/issues'

export default function loading (state = {
    loading: true,
    list: [],
    totalCount: 0
}, action) {
    switch (action.type) {
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