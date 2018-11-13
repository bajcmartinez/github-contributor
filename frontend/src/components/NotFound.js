import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";

const styles = theme => ({
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
});

function NotFound({classes}) {
    return (
        <div className={classes.heroContent}>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                404 - Page not found!
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" component="p">
                he page you are looking for doesn't exist.
            </Typography>
        </div>
    )
}

NotFound.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);