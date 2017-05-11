import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ColorLegend extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    colors: PropTypes.array.isRequired,
    minValue: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
    labelY: PropTypes.number.isRequired,
    legendY: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    labelValueFormat: PropTypes.string,
    locale: PropTypes.object
  };
}