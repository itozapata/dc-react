import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class OverlayGeoJson extends Component {
  static propTypes = {
    json: PropTypes.array,
    name: PropTypes.string,
    keyAccessor: PropTypes.func
  };
}