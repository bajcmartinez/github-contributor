import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors'

import App from './components/App';
import middleware from './middleware';
import reducer from './reducers';

const store = createStore(reducer, middleware);

const theme = createMuiTheme({
    palette: {
        primary: blueGrey
    },
    typography: {
        useNextVariants: true,
    },
});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>
, document.getElementById('root'));