import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';

const styles = theme => ({
    card: {
        marginBottom: theme.spacing.unit * 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },

    cardContent: {
        flexGrow: 1
    },

    chip: {
        padding: 0,
        height: 'auto',
        marginRight: theme.spacing.unit
    }
});

export const formatRepositoryUrl = repoUrl => 'https://github.com/' + repoUrl.replace(/.*repos\//g, '');

function RepoCard({ classes, repository }) {
    return (
        <Card className={classes.card}>
            <CardActionArea href={repository.clone_url} target="_blank" className={classes.cardContent}>
                <CardContent>
                    <Typography variant="h6">
                        {repository.full_name}
                    </Typography>
                    <Typography component="p" color="textSecondary">
                        Opened <Moment fromNow date={repository.created_at} /> by {repository.owner.login}
                    </Typography>
                    <Typography component="p">
                        {repository.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href={repository.clone_url} target="_blank">
                    View Repo
                </Button>

                <Button size="small" color="primary" href={`${formatRepositoryUrl(repository.url)}/issues`} target="_blank">
                    View Issues ({repository.open_issues})
                </Button>
            </CardActions>
        </Card>
    )
}

RepoCard.propTypes = {
    classes: PropTypes.object.isRequired,
    repository: PropTypes.object.isRequired
};

export default withStyles(styles)(RepoCard);