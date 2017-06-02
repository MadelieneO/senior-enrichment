'use strict';

import React, { Component } from 'react';

export default class Student extends Component {

  componentDidMount () {
    this.props.onLoadSingleStudent();
  }

  render () {
    console.log('~~~~ this.props: ', this.props)
    return (
      <div>
        <h2>NAME GOES HERE</h2>
        <div>
          <h3>PERHAPS EMAIL</h3>
        </div>
      </div>
    )
  }
}

      // <div>
      //   <h2>{this.props.student.name}</h2>
      // </div>