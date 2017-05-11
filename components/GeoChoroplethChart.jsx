import React, { Component, PropTypes } from 'react';
import dc from 'dc';
import { Base } from './Base';
import { OverlayGeoJson, Zoom, ColorLegend } from './index';

class GeoChoroplethChart extends Component {
  static propTypes = {
    projection: PropTypes.func.isRequired,
    colors: PropTypes.array.isRequired,
    colorDomain: PropTypes.array.isRequired,
    valueAccessor: PropTypes.func,
    onPreRedraw: PropTypes.func,
    onRenderlet: PropTypes.func,
    onFiltered: PropTypes.func,
    children: function (props, propName, componentName) {
      const prop = props[propName];
      let error = null;
      React.Children.forEach(prop, function (child) {
        if (child.type !== OverlayGeoJson && child.type !== Zoom && child.type !== ColorLegend) {
          error = new Error('`' + componentName + '` children should be of type `OverlayGeoJson`, `Zoom` or `ColorLegend`.');
        }
      });
      return error;
    }
  };

  loadChart = (container) => {
    if (container == null) {
      return;
    }
    
    const chart = dc.geoChoroplethChart(container, this.props.chartGroup);
    const helper = this.props.chartHelper(this, chart);
    helper.setProperties('projection', 'colors', 'colorDomain',
                         'valueAccessor', 'onPreRedraw', 'onRenderlet',
                         'onFiltered');

    React.Children.forEach(this.props.children, function (child) {
      if (child.type === OverlayGeoJson) {
        helper.setOverlayGeoJson(child.props.json, child.props.name, child.props.keyAccessor);
      }
    });

    chart.render();

    React.Children.forEach(this.props.children, function (child) {
      if (child.type === Zoom) {
        chart._zoom = helper.setZoom(child.props.width, child.props.height, child.props.scale, child.props.projection);
      }
      if (child.type === ColorLegend) {
        helper.setColorLegend(child.props.width, child.props.height, child.props.colors, child.props.minValue, child.props.maxValue, child.props.labelY, child.props.legendY, child.props.size, child.props.labelValueFormat, child.props.locale);
      }
    });
  };

  render() {
    return (
      <div className={this.props.className} ref={this.loadChart} id={this.props.id} />
    );
  }
}

export default Base(GeoChoroplethChart);
