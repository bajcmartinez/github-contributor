import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import { Error } from '@material-ui/icons';
import ReactLoading from 'react-loading';

import HeroContent from './HeroContent';
import ReposList from './ReposList';
import MainAppBar from "./MainAppBar";
import {handleLoadFavRepositories} from "../actions/repositories";

const styles = theme => ({
    container: {
        flexGrow: 1
    },

    content: {
        padding: theme.spacing.unit * 3
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
    }
});

class FavouritesPage extends Component {
    componentDidMount() {
        this.props.loadFavRepositories();
    }

    render() {
        const { classes, repositories } = this.props;

        function getContent() {
            if (repositories.loading) {
                return (
                    <div className={classes.loading}>
                        <ReactLoading type="bars" color="#000" />
                    </div>
                );
            } else if (repositories.error) {
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
                return <ReposList repositories={repositories.favourites} totalCount={repositories.favourites.length}/>
            }
        }

        return (
            <Fragment>
                <main className={classes.container}>
                    <MainAppBar />
                    <div className={classes.content}>
                        <HeroContent
                            title="Our Favourite Projects"
                            description="This is our top picks for open source projects you can help with!"
                        />
                        {getContent()}
                    </div>
                </main>
            </Fragment>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        loadFavRepositories: () => dispatch(handleLoadFavRepositories())
    }
}

function mapStateToProps ({ repositories }) {
    return {
        repositories: repositories
    }
}

FavouritesPage.propTypes = {
    classes: PropTypes.object.isRequired,
    repositories: PropTypes.object.isRequired,
    loadFavRepositories: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FavouritesPage));
