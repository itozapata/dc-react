import React, { Component, PropTypes } from 'react';

export class OverlayGeoJson extends Component {
  static propTypes = {
    json: PropTypes.array,
    name: PropTypes.string,
    keyAccessor: PropTypes.func
  };
}