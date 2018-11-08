import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListItemText, Typography, Checkbox } from '@material-ui/core/';

const languages = [
    'javascript',
    'python',
    'c#',
    'html'
].map(language => ({
    value: language,
    label: language,
}));

const styles = theme => ({
    title: {
        paddingLeft: theme.spacing.unit * 3
    },
    select: {
        paddingTop: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3
    },
    toolbar: theme.mixins.toolbar,
    checkbox: {
        padding: 0
    },
    section: {
        paddingTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3
    }
});

class MainDrawer extends Component {
    render() {
        const { classes, selectLanguage, toggleLabel, filters } = this.props;
        return (
            <div>
                <div className={classes.toolbar}/>
                <Divider/>

                <div className={classes.section}>
                    <Typography variant="h6" className={classes.title}>Language</Typography>
                    <Select
                        options={languages}
                        className={classes.select}
                        onChange={(language) => selectLanguage(language.value)}
                        placeholder="Filter by language"
                    />
                </div>
                <Divider/>

                <div className={classes.section}>
                    <Typography variant="h6" className={classes.title}>Labels</Typography>
                    <List>
                        {['help-wanted', 'first-timers-only', 'good-first-issue'].map((text) => (
                            <ListItem dense button key={text} onClick={() => toggleLabel(text)}>
                                <Checkbox
                                    className={classes.checkbox}
                                    checked={filters.labels.includes(text)}
                                    tabIndex={-1}
                                    disableRipple
                                />
                                <ListItemText primary={text}/>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(MainDrawer);