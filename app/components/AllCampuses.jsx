'use strict';

import React from 'react';

export default class AllCampuses extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const campusList = this.props.campuses && this.props.campuses.map(campus => (
      <li key={campus.id}>{campus.name}</li>
    ));

    return (
      <div>
        <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
        <ul>{campusList}</ul>
      </div>
    );
  }
}