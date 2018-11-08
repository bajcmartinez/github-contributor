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
       display: 'flex',
   }
});

class App extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <CssBaseline />
                <div className={classes.layout}>
                    <Router>
                        <Switch>
                            <Route path='/' exact component={HomePage}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Router>
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(App);
