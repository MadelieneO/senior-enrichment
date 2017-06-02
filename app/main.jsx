'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import store from './store';
import { loadStudents, loadStudent, loadCampuses, loadCampus } from './action_creators/action-creators';
import AllCampusesContainer from './components/AllCampusesContainer';
import AllStudentsContainer from './components/AllStudentsContainer';
//import Dashboard from './components/Dashboard';

const onCampusesEnter = function() {
  store.dispatch(loadCampuses());
}

const onStudentsEnter = function() {
  store.dispatch(loadStudents());
}

const onStudentEnter = function(nextRouterState) {
  store.dispatch(loadStudent(nextRouterState))
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="campuses" component={AllCampusesContainer} onEnter={onCampusesEnter} />
        <Route path="campuses/:id" component={CampusContainer} onEnter={onCampusEnter} />
        <Route path="students" component={AllStudentsContainer} onEnter={onStudentsEnter} />
        <Route path="students/:id" component={StudentContainer} onEnter={onStudentEnter} />
        <IndexRoute component={AllCampusesContainer} onEnter={onCampusesEnter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);

