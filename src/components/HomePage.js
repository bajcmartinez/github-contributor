import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import { handleLoadIssues } from "../actions/issues";
import HeroContent from './HeroContent';
import IssuesList from './IssuesList';

class Home extends Component {
    componentDidMount() {
        this.props.loadIssues();
    }

    render() {
        return (
            <Fragment>
                <HeroContent/>
                <IssuesList issues={this.props.issues} totalCount={this.props.totalCount} />
            </Fragment>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        loadIssues: () => dispatch(handleLoadIssues())
    }
}

function mapStateToProps ({ issues }) {
    return {
        issues: issues.list,
        totalCount: issues.totalCount
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);