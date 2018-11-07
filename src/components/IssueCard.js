import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';

const styles = theme => ({
    card: {
        marginBottom: theme.spacing.unit * 3
    },

    chip: {
        padding: 0,
        height: 'auto',
        marginRight: theme.spacing.unit
    }
});

const repoName = (repoUrl) => repoUrl.replace(/.*repos\//g, '');
export const formatRepositoryUrl = repoUrl => 'https://github.com/' + repoUrl.replace(/.*repos\//g, '');

//source: https://codepen.io/Z1MM32M4N/pen/YXxvRq
const invertColor = (color) => {
    let rgb = parseInt(color, 16);
    let r = (rgb >> 16) & 0xff;
    let g = (rgb >>  8) & 0xff;
    let b = (rgb >>  0) & 0xff;

    let luminescence = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    if (luminescence < 140) {
        return 'white'
    } else {
        return '#303300'
    }
};

function IssueCard({ classes, issue }) {
    return (
        <Card className={classes.card}>
            <CardActionArea href={formatRepositoryUrl(issue.url)} target="_blank">
                <CardContent>
                    <Typography variant="h6">
                        {repoName(issue.repository_url)}: {repoName(issue.title)}
                    </Typography>
                    <Typography component="p" color="textSecondary">
                        Opened <Moment fromNow date={issue.created_at} /> by {issue.user.login}
                    </Typography>
                    {issue.labels.map(label => (
                        <Chip key={label.id} label={label.name} style={{
                            backgroundColor: `#${label.color}`,
                            color: `${invertColor(label.color)}`
                        }} className={classes.chip} />
                    ))}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href={formatRepositoryUrl(issue.repository_url)} target="_blank">
                    View Repo
                </Button>
                <Button size="small" color="primary" href={formatRepositoryUrl(issue.url)} target="_blank">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}

IssueCard.propTypes = {
    classes: PropTypes.object.isRequired,
    issue: PropTypes.object.isRequired
};

export default withStyles(styles)(IssueCard);