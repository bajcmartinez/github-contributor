import { TOGGLE_LABEL, SELECT_LANGUAGE } from '../actions/filters'
import {labelsList} from '../api/github';

const defaultFilters = {
    language: null,
    labels: [labelsList[0]]
};

export default function filters (state = defaultFilters, action) {
    switch (action.type) {
        case SELECT_LANGUAGE:
            return {
                ...state,
                language: action.language
            };
        case TOGGLE_LABEL:
            const label = action.label;
            let labels;

            if (state.labels.includes(label))
                labels = state.labels.filter(l => l !== label);
            else
                labels = [...state.labels, label];

            return {
                ...state,
                labels
            };
        default :
            return state
    }
}