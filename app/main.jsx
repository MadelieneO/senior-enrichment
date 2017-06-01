'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import store from './store';
import { loadStudents, loadStudent } from './action-creators';
import Dashboard from './components/Dashboard';

const onStudentsEnter = function() {
  store.dispatch(loadStudents());
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="students" container={Dashboard} onEnter={onStudentsEnter} />
        <IndexRoute component={Dashboard} onEnter={onStudentsEnter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
