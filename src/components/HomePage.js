import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import { handleLoadIssues } from "../actions/issues";
import HeroContent from './HeroContent';
import IssuesList from './IssuesList';
import MainAppBar from "./MainAppBar";
import MainDrawer from "./MainDrawer";

const drawerWidth = 240;

const styles = theme => ({
    container: {
        flexGrow: 1
    },

    content: {
        padding: theme.spacing.unit * 3
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },

    drawerPaper: {
        width: drawerWidth
    },
});

class Home extends Component {
    componentDidMount() {
        this.props.loadIssues();
    }

    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <nav className={classes.drawer}>
                    <Drawer
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <MainDrawer />
                    </Drawer>
                </nav>
                <main className={classes.container}>
                    <MainAppBar />
                    <div className={classes.content}>
                        <HeroContent/>
                        <IssuesList issues={this.props.issues} totalCount={this.props.totalCount} />
                    </div>
                </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));