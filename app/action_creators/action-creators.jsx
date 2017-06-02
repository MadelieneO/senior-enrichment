'use strict';

import axios from 'axios';

// action types:
//--------------
export const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS';
export const RECEIVE_STUDENT = 'RECEIVE_STUDENT';
export const ADD_STUDENT = 'ADD_STUDENT';
export const REMOVE_STUDENT = 'REMOVE_STUDENT';

export const RECEIVE_CAMPUSES = 'RECEIVE_CAMPUSES';
export const RECEIVE_CAMPUS = 'RECEIVE_CAMPUS';
export const ADD_CAMPUS = 'ADD_CAMPUS';
export const REMOVE_CAMPUS = 'REMOVE_CAMPUS';

// synchronous action creators:
//-----------------------------
export const receiveStudents = function(students) {
  console.log('~~~ receiveStudents action creator - students recd: ', students)
  return {
    type: RECEIVE_STUDENTS,
    students: students
  }
}

export const receiveStudent = function(student) {
  return {
    type: RECEIVE_STUDENT,
    student: student
  }
}

export const receiveCampuses = function(campuses) {
  console.log('~~~ receiveCampuses action creator - campuses recd: ', campuses)
  return {
    type: RECEIVE_CAMPUSES,
    campuses: campuses
  }
}

export const receiveCampus = function(campus) {
  console.log('~~~ receiveCampus action creator - campus recd: ', campus)
  return {
    type: RECEIVE_CAMPUS,
    campus: campus
  }
}

// asynchronous action creators: return a (function) 'thunk'
//------------------------------

// Retrieve all students
export const loadStudents = function() {
  return function(dispatch) {
    axios.get('/api/students')
    .then(function (res) {
      return res.data;
    })
    .then(function(students) {
      const action = receiveStudents(students);
      dispatch(action);
    })
  }
}

// Retrieve 1 student
export const loadStudent = function(id) {
  return function(dispatch) {
    axios.get('/api/students' + id)
    .then(function (res) {
      return res.data;
    })
    .then(function(student) {
      const action = receiveStudent(student);
      dispatch(action);
    })
  }
}

// Retrieve all campuses
export const loadCampuses = function() {
  return function(dispatch) {
    axios.get('/api/campuses')
    .then(function (res) {
      return res.data;
    })
    .then(function(campuses) {
      const action = receiveCampuses(campuses);
      dispatch(action);
    })
  }
}

// Retrieve 1 campus
export const loadCampus = function(id) {
  return function(dispatch) {
    axios.get('/api/campuses' + id)
    .then(function (res) {
      return res.data;
    })
    .then(function(campus) {
      const action = receiveCampus(campus);
      dispatch(action);
    })
  }
}
