'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import store from './store';
import { loadStudents, loadStudent, loadCampuses, loadCampus } from './action_creators/action-creators';
import AllCampusesContainer from './components/AllCampusesContainer';
import AllStudentsContainer from './components/AllStudentsContainer';
import CampusContainer from './components/CampusContainer';
import StudentContainer from './components/StudentContainer';

const onCampusesEnter = function() {
  store.dispatch(loadCampuses());
}

const onCampusEnter = function(nextRouterState) {
  
  const campusId = nextRouterState.params.id;
  //console.log('~------------------------------ campusId: ', campusId)
  store.dispatch(loadCampus(campusId));
}

const onStudentsEnter = function() {
  store.dispatch(loadStudents());
}

const onStudentEnter = function(nextRouterState) {
  const studentId = nextRouterState.params.id;
  store.dispatch(loadStudent(studentId));
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
