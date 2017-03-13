import React, { Component, PropTypes } from 'react';
import dc from 'dc';
import { Base } from './Base';
import { Tooltips, Legend, Zoom, OverlayGeoJson } from './index';

class GeoChoroplethChart extends Component {
  static propTypes = {
    projection: PropTypes.func.isRequired,
    colors: PropTypes.array.isRequired,
    colorDomain: PropTypes.array.isRequired,
    valueAccessor: PropTypes.func,
    onPreRedraw: PropTypes.func,
    children: function (props, propName, componentName) {
      const prop = props[propName];
      let error = null;
      React.Children.forEach(prop, function (child) {
        if (child.type !== OverlayGeoJson && child.type !== Zoom) {
          error = new Error('`' + componentName + '` children should be of type `OverlayGeoJson` or `Zoom`.');
        }
      });
      return error;
    }
  };

  loadChart = (container) => {
    const chart = dc.geoChoroplethChart(container);
    const helper = this.props.chartHelper(this, chart);
    helper.setProperties('projection', 'colors', 'colorDomain',
                         'valueAccessor', 'onPreRedraw');

    React.Children.forEach(this.props.children, function (child) {
      if (child.type === OverlayGeoJson) {
        helper.setOverlayGeoJson(child.props.json, child.props.name, child.props.keyAccessor);
      }
      if (child.type === Zoom) {
        helper.setZoom(child.props.width, child.props.height, child.props.scale, child.props.projection);
      }
    });

    chart.render();
  };

  render() {
    return (
      <div className={this.props.className} ref={this.loadChart} />
    );
  }
}

export default Base(GeoChoroplethChart);
