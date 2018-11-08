import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ReactLoading from 'react-loading';

import { handleLoadIssues } from "../actions/issues";
import { selectLanguage, toggleLabel } from "../actions/filters";
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

    loading: {
        display: 'flex',
        justifyContent: 'center'
    }
});

class Home extends Component {
    componentDidMount() {
        this.props.loadIssues();
    }

    render() {
        const { classes, selectLanguage, toggleLabel, filters } = this.props;

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
                        <MainDrawer selectLanguage={selectLanguage} toggleLabel={toggleLabel} filters={filters} />
                    </Drawer>
                </nav>
                <main className={classes.container}>
                    <MainAppBar />
                    <div className={classes.content}>
                        <HeroContent/>
                        {this.props.issues.loading ?
                            <div className={classes.loading}>
                                <ReactLoading type="bars" color="#000" />
                            </div>
                            :
                            <IssuesList issues={this.props.issues.list} totalCount={this.props.issues.totalCount}/>
                        }
                    </div>
                </main>
            </Fragment>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        loadIssues: () => dispatch(handleLoadIssues({labels:['help-wanted']})),
        selectLanguage: (language) => {
            console.log(language);
            dispatch(selectLanguage(language));
            dispatch(handleLoadIssues());
        },
        toggleLabel: (label) => {
            dispatch(toggleLabel(label));
            dispatch(handleLoadIssues());
        }
    }
}

function mapStateToProps ({ issues, filters }) {
    return {
        issues,
        filters
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));