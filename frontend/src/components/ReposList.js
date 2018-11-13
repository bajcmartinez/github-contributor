import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import RepoCard from "./RepoCard";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function ReposList({repositories, classes}) {
    if (repositories && repositories.length === 0) {
        return (
            <div>Repos are loading...</div>
        )
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                {repositories && repositories.map((repository) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={repository.id}>
                        <RepoCard repository={repository}>
                            Repo
                        </RepoCard>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

ReposList.propTypes = {
    repositories: PropTypes.array.isRequired,
    totalCount: PropTypes.number.isRequired
};

export default withStyles(styles)(ReposList);