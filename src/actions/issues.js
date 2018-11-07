import * as githubAPI from '../api/github';
export const RECEIVE_ISSUES = 'RECEIVE_ISSUES';

export const receiveIssues = (payload) => ({
    type: RECEIVE_ISSUES,
    payload
});

export const handleLoadIssues = () => (dispatch) => {
    return githubAPI.getIssues().then((response) => {
        dispatch(receiveIssues(response.data));
    });
};