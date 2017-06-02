'use strict';

import { connect } from 'react-redux';
import { loadStudent } from '../action_creators/action-creators';
import Student from './Student';

const mapStateToProps = function(state) {
  return {
    student: state.selectedStudent
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onLoadSingleStudent: function() {
      const studentId = ownProps.params.studentId;
      const thunk = loadStudent(studentId);
      dispatch(thunk);
    }
  };
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const StudentContainer = componentCreator(Student);
export default StudentContainer;
