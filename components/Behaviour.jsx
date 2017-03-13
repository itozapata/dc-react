import React, { Component, PropTypes } from 'react';

export class Zoom extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    scale: PropTypes.number,
    projection: PropTypes.func
  };
}