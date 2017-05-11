import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Zoom extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    scale: PropTypes.number,
    projection: PropTypes.func
  };
}