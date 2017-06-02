'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class AllStudents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const studentList = this.props.students && this.props.students.map(student => (
      <li key={student.id}>
        <Link to={'/students/' + student.id}>{student.name}</Link>
      </li>
    ));

    return (
      <div>
        <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
        <h4>Student List</h4>
        <ul>{studentList}</ul>                
        <button type="button" className="btn btn-primary btn-lg btn-block">Add New Student</button>
      </div>
    );
  }
}

