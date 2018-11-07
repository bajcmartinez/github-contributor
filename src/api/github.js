import axios from 'axios';

const formatIssueQueryParams = (filter, values) => {
    return (values.length ? ' ' : '')
        + values.map((value) => {
            return filter + ':'
                + '"' + encodeURIComponent(value) + '"'

        }).join('+')
}

const endpoints = {
    issues: ({labels}, sort) =>
        `https://api.github.com/search/issues?q=is:issue is:open${formatIssueQueryParams('label', labels)}&sort=${sort.field}&order=${sort.order}`,
};

export const getIssues = (query = {labels:['help-wanted']}, sort = {field: 'created', order: 'desc'}) => {
    return axios.get(
        endpoints.issues(query, sort)
    );
};