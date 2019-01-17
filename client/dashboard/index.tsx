"use strict";

import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DashboardApp from '../components/DashboardApp';

import reducers from '../store/reducers/index';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(reducers, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <DashboardApp />
  </Provider>,
document.getElementById('root'));
