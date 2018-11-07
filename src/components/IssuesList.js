import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
            <TransitionGroup>
                {props.issues && props.issues.map((issue) => (
                    <CSSTransition
                        key={issue.id}
                        timeout={500}
                        classNames="question-list"
                    >
                        <IssueCard issue={issue}/>
                    </CSSTransition>
                ))}

            </TransitionGroup>
        </div>
    )
}

IssuesList.propTypes = {
    issues: PropTypes.array.isRequired,
    totalCount: PropTypes.number.isRequired
};