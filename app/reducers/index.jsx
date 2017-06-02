'use strict';

import { combineReducers } from 'redux'
import { RECEIVE_STUDENTS, RECEIVE_STUDENT, RECEIVE_CAMPUSES, RECEIVE_CAMPUS } from '../action_creators/action-creators';

const initialState = {
 students: [],
 student: {},
 campuses: [],
 campus: {}
}

const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_STUDENTS:
      return Object.assign({}, state, { students: action.students })
    case RECEIVE_STUDENT:
      return Object.assign({}, state, { student: action.student })
    case RECEIVE_CAMPUSES:
      return Object.assign({}, state, { campuses: action.campuses })
    case RECEIVE_CAMPUS:
      return Object.assign({}, state, { campus: action.campus })
    default: return state
  }
};

export default rootReducer
