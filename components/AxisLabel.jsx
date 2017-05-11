import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AxisLabel extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    padding: PropTypes.number
  };
}

export class XAxisLabel extends AxisLabel {
}

export class YAxisLabel extends AxisLabel {
}