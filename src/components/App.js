import React, {Component, Fragment} from 'react';
import 'typeface-roboto';
import {Switch, Route} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import HomePage from './HomePage';
import NotFound from './NotFound';

const styles = theme => ({
   layout: {
       width: 'auto',
       marginLeft: theme.spacing.unit * 3,
       marginRight: theme.spacing.unit * 3,
       [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
           width: 900,
           marginLeft: 'auto',
           marginRight: 'auto',
       },
   }
});

class App extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Router>
                        <Switch>
                            <Route path='/' exact component={HomePage}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Router>
                </main>
            </Fragment>
        );
    }
}

export default withStyles(styles)(App);
