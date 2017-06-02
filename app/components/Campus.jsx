'use strict';

import React, { Component } from 'react';

export default class Campus extends Component {

  componentDidMount () {
    this.props.onLoadSingleCampus();
  }

  render () {
    console.log('~~~~ this.props: ', this.props)
    return (
      <div>
        <h2>NAME GOES HERE</h2>
        <div>
          <h3>AND, WHO KNOWS..</h3>
        </div>
      </div>
    )
  }
}

      // <div>
      //   <h2>{this.props.student.name}</h2>
      // </div>