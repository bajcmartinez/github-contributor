import * as githubAPI from '../api/github';
export const FETCH_ISSUES = 'FETCH_ISSUES';
export const RECEIVE_ISSUES = 'RECEIVE_ISSUES';

export const fetchIssues = () => ({
    type: FETCH_ISSUES
});

export const receiveIssues = (payload) => ({
    type: RECEIVE_ISSUES,
    payload
});

export const handleLoadIssues = () => (dispatch, getState) => {
    dispatch(fetchIssues());
    return githubAPI.getIssues(getState().filters).then((response) => {
        dispatch(receiveIssues(response.data));
    });
};