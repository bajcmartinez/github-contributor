import { TOGGLE_LABEL, SELECT_LANGUAGE } from '../actions/filters'

const defaultFilters = {
    language: null,
    labels: []
};

export default function filters (state = defaultFilters, action) {
    switch (action.type) {
        case SELECT_LANGUAGE:
            return {
                ...state,
                language: action.language
            };
        default :
            return state
    }
}