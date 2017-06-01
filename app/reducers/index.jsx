'use strict';

import { combineReducers } from 'redux'
import { RECEIVE_STUDENTS, RECEIVE_STUDENT } from '../action-creators';

const initialState = {
 students: []
}

const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_STUDENTS:
      return Object.assign({}, state, { students: action.students })
    case RECEIVE_STUDENT:
      return Object.assign({}, state, { student: action.student })
    default: return state
  }
};

export default rootReducer

  // console.log('~~~~~~ reducer - incoming state: ', state)
  // console.log('~~~~~~ reducer - incoming action: ', action)