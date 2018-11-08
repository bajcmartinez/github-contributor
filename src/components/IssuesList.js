import React from 'react';
import PropTypes from 'prop-types';

import IssueCard from "./IssueCard";

export default function IssuesList(props) {
    if (props.issues && props.issues.length === 0) {
        return (
            <div>
                All done, come back later to answer some more questions
            </div>
        )
    }

    return (
        <div>
            {props.issues && props.issues.map((issue) => (
                <IssueCard issue={issue}/>
            ))}
        </div>
    )
}

IssuesList.propTypes = {
    issues: PropTypes.array.isRequired,
    totalCount: PropTypes.number.isRequired
};