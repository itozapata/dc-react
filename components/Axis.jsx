import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Axis extends Component {
  static propTypes = {
    tickFormat: PropTypes.func,
    ticks: PropTypes.number
  };
}

export class XAxis extends Axis {
}

export class YAxis extends Axis {
}