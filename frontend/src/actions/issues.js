import * as githubAPI from '../api/github';
export const FETCH_ISSUES = 'FETCH_ISSUES';
export const RECEIVE_ISSUES = 'RECEIVE_ISSUES';
export const RECEIVE_ISSUES_ERROR = 'RECEIVE_ISSUES_ERROR';

export const fetchIssues = () => ({
    type: FETCH_ISSUES
});

export const receiveIssues = (payload) => ({
    type: RECEIVE_ISSUES,
    payload
});

export const receiveIssuesError = (filters, error) => ({
    type: RECEIVE_ISSUES_ERROR,
    filters,
    error
});

export const handleLoadIssues = () => (dispatch, getState) => {
    dispatch(fetchIssues());
    const { filters } = getState();
    const { sort, ...onlyFilters } = filters;
    console.log(sort, onlyFilters);
    return githubAPI.getIssues(onlyFilters, sort).then((response) => {
        dispatch(receiveIssues(response.data));
    }).catch(error => {
        console.log(
            'Error querying GitHub',
            filters,
            error
        );
        dispatch(receiveIssuesError(filters, error.response ? error.response.data : error.message))
    });
};