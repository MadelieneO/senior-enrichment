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

const onStudentsEnter = function() {
  store.dispatch(loadStudents());
}

const onCampusesEnter = function() {
  store.dispatch(loadCampuses());
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="students" component={AllStudentsContainer} onEnter={onStudentsEnter} />
        <Route path="campuses" component={AllCampusesContainer} onEnter={onCampusesEnter} />
        <IndexRoute component={AllCampusesContainer} onEnter={onCampusesEnter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);

//<Route path="students/:id" component={StudentContainer} onEnter={onStudentEnter} />
//<Route path="campuses/:id" component={CampusContainer} onEnter={onCampusEnter} />