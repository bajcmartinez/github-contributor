import {FETCH_ISSUES, RECEIVE_ISSUES, RECEIVE_ISSUES_ERROR} from '../actions/issues';

const defaultState = {
    loading: true,
    error: false,
    rateLimitExceeded: false,
    list: [],
    totalCount: 0
};

const exceeded_limit_url = "https://developer.github.com/v3/#rate-limiting";

export default function issues (state = defaultState, action) {
    switch (action.type) {
        case FETCH_ISSUES:
            return {
                ...state,
                loading: true,
                error: false,
                rateLimitExceeded: false,
            };
        case RECEIVE_ISSUES:
            return {
                ...state,
                loading: false,
                error: false,
                rateLimitExceeded: false,
                list: action.payload.items,
                totalCount: action.payload.total_count,
            };
        case RECEIVE_ISSUES_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                rateLimitExceeded: (
                    action.error
                    && action.error.documentation_url === exceeded_limit_url
                ),
            };
        default :
            return state
    }
}