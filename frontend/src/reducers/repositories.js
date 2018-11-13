import {FETCH_FAV_REPOSITORIES, RECEIVE_FAV_REPOSITORIES, RECEIVE_FAV_REPOSITORIES_ERROR} from '../actions/repositories';

const defaultState = {
    loading: true,
    error: false,
    favourites: [],
};

export default function repositories (state = defaultState, action) {
    switch (action.type) {
        case FETCH_FAV_REPOSITORIES:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case RECEIVE_FAV_REPOSITORIES:
            return {
                ...state,
                loading: false,
                error: false,
                favourites: action.payload
            };
        case RECEIVE_FAV_REPOSITORIES_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };
        default :
            return state
    }
}