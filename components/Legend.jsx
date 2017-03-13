import React, { Component, PropTypes } from 'react';

export class ColorLegend extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    colors: PropTypes.array.isRequired,
    minValue: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
    labelY: PropTypes.number.isRequired,
    legendY: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired
  };
}