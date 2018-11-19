export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';
export const TOGGLE_LABEL = 'TOGGLE_LABEL';
export const SELECT_SORT = 'SELECT_SORT';

export const selectLanguage = (language) => ({
    type: SELECT_LANGUAGE,
    language
});

export const toggleLabel = (label) => ({
    type: TOGGLE_LABEL,
    label
});

export const selectSort = (field, order) => ({
    type: SELECT_SORT,
    field,
    order
});