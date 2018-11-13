import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto';
import {Switch, Route} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import HomePage from './HomePage';
import FavouritesPage from './FavouritesPage';
import NotFound from './NotFound';

const styles = () => ({
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
                            <Route path='/favourites' exact component={FavouritesPage}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Router>
                </div>
            </Fragment>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
