'use strict';

import React from 'react';

export default class AllStudents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const studentList = this.props.students && this.props.students.map(student => (
      <li key={student.id}>{student.name}</li>
    ));
    return (
      <div>
        <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
        <ul>{studentList}</ul>
      </div>
    );
  }
}

