import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import routes from './routes';
import allReducers from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();

const store = createStore(
  allReducers,
  applyMiddleware(thunk, promise)
);

render((
  <Provider store={ store } >
    <MuiThemeProvider>
      <Router routes={routes} history={browserHistory} />
    </MuiThemeProvider>
  </Provider>
), document.getElementById('root'));
