import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
});

function HeroContent(props) {
    const { classes } = props;

    return (
        <div className={classes.heroContent}>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                Become a Contributor
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" component="p">
                Many open source projects are looking for your help. In this website you can find out what are the issues that need your help.
            </Typography>
        </div>
    );
}

HeroContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeroContent);