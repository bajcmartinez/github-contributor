import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListItemText, Typography, Checkbox } from '@material-ui/core/';

import { labelsList, sortList, languagesList } from "../api/github";

const sorts = sortList.map((sort, index) => ({
    value: index,
    label: sort.label,
}));

const languages = languagesList.map(language => ({
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
        const { classes, selectLanguage, selectSort, toggleLabel, filters } = this.props;
        return (
            <div>
                <div className={classes.toolbar}/>
                <Divider/>

                <div className={classes.section}>
                    <Typography variant="h6" className={classes.title}>Language</Typography>
                    <Select
                        options={languages}
                        className={classes.select}
                        onChange={(language) => selectLanguage(language ? language.value : null)}
                        isClearable
                        placeholder="Filter by language"
                    />
                </div>
                <Divider/>

                <div className={classes.section}>
                    <Typography variant="h6" className={classes.title}>Labels</Typography>
                    <List>
                        {labelsList.map((text) => (
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
                <Divider/>

                <div className={classes.section}>
                    <Typography variant="h6" className={classes.title}>Sort</Typography>
                    <Select
                        options={sorts}
                        className={classes.select}
                        onChange={(sort) => selectSort(sortList[sort.value].field, sortList[sort.value].order)}
                        defaultValue={sorts[0]}
                        isClearable={false}
                    />
                </div>
            </div>
        )
    }
}

MainDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    filters: PropTypes.object.isRequired,
    selectLanguage: PropTypes.func.isRequired,
    selectSort: PropTypes.func.isRequired,
    toggleLabel: PropTypes.func.isRequired
};

export default withStyles(styles)(MainDrawer);
