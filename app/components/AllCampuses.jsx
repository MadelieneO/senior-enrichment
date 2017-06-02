'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class AllCampuses extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const campusList = this.props.campuses && this.props.campuses.map(campus => (
      <li key={campus.id}>
        <Link to={'/campuses/' + campus.id}>{campus.name}</Link>
      </li>
    ));

    return (
      <div>
        <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
        <h4>Campus List</h4>
        <ul>{campusList}</ul>
        <button type="button" className="btn btn-primary btn-lg btn-block">Add New Campus</button>
      </div>
    );
  }
}
