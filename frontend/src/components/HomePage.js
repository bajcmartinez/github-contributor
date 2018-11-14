import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, Card, CardContent, CardActions, Button, Typography, Hidden } from '@material-ui/core';
import { Star, Error } from '@material-ui/icons';
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
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        }
    },

    drawerPaper: {
        width: drawerWidth
    },

    loading: {
        display: 'flex',
        justifyContent: 'center'
    },

    error: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 350,
        background: theme.palette.error.dark,
        color: theme.palette.error.contrastText
    },

    errorText: {
        color: theme.palette.error.contrastText
    },

    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});

class Home extends Component {
    state = {
        mobileOpen: false,
    };

    componentDidMount() {
        this.props.loadIssues();
    }

    handleDrawerToggle = () => {
        console.log('handleDrawerToggle');
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes, selectLanguage, toggleLabel, filters, issues } = this.props;
        console.log('open', this.state.mobileOpen);

        function getContent() {
            if (issues.loading) {
                return (
                    <div className={classes.loading}>
                        <ReactLoading type="bars" color="#000" />
                    </div>
                );
            } else if (issues.rateLimitExceeded) {
                return (
                    <Card className={classes.error}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" className={classes.errorText}>
                                <Error /> Rate Limit Exceeded
                            </Typography>
                            <Typography component="p" className={classes.errorText}>
                                GitHub has a restriction on the number of requests per minute we can do to their API.
                                <br />
                                Please support our project by starring/watching it so I can support a workaround on this issue.
                                <br /><br />
                                Thanks!
                                <br />
                                The team behind github-contributor
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" className={classes.errorText} href={process.env.REACT_APP_REPO} target="_blank">
                                <Star />
                                Star
                            </Button>
                        </CardActions>
                    </Card>
                )
            } else if (issues.error) {
                return (
                    <Card className={classes.error}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" className={classes.errorText}>
                                Error
                            </Typography>
                            <Typography component="p" className={classes.errorText}>
                                An unexpected error has occured, please try again in a few minutes or report this error.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" className={classes.errorText} href={`${process.env.REACT_APP_REPO}/issues/new`} target="_blank">
                                <Error />
                                Report
                            </Button>
                        </CardActions>
                    </Card>
                )
            } else {
                return <IssuesList issues={issues.list} totalCount={issues.totalCount}/>
            }
        }

        return (
            <Fragment>
                <nav className={classes.drawer}>
                    <Hidden mdUp implementation="css">
                        <Drawer
                            variant="temporary"
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            <MainDrawer selectLanguage={selectLanguage} toggleLabel={toggleLabel} filters={filters} />
                        </Drawer>
                    </Hidden>
                    <Hidden smDown implementation="css">
                        <Drawer
                            variant="permanent"
                            open
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            <MainDrawer selectLanguage={selectLanguage} toggleLabel={toggleLabel} filters={filters} />
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.container}>
                    <MainAppBar handleDrawerToggle={this.handleDrawerToggle} sideBar={true} title={`Github Contributor - (Version: ${process.env.REACT_APP_VERSION})`} />
                    <div className={classes.content}>
                        <HeroContent/>
                        {getContent()}
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

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    filters: PropTypes.object.isRequired,
    issues: PropTypes.object.isRequired,
    loadIssues: PropTypes.func.isRequired,
    selectLanguage: PropTypes.func.isRequired,
    toggleLabel: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));
