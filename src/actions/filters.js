export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';
export const TOGGLE_LABEL = 'TOGGLE_LABEL';

export const selectLanguage = (language) => ({
    type: SELECT_LANGUAGE,
    language
});

export const toggleLabel = (label) => ({
    type: TOGGLE_LABEL,
    label
});