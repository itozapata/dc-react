import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dc from 'dc';
import { Base } from './Base';
import { XAxisLabel, YAxisLabel, XAxis, YAxis } from './index';

class LineChart extends Component {
  static propTypes = {
    renderArea: PropTypes.bool,
    xAxis: PropTypes.func,
    x: PropTypes.func,
    round: PropTypes.func,
    xUnits: PropTypes.func,
    elasticY: PropTypes.bool,
    renderHorizontalGridLines: PropTypes.bool,
    renderDataPoints: PropTypes.object,
    brushOn: PropTypes.bool,
    valueAccessor: PropTypes.func,
    stack: PropTypes.func,
    renderVerticalGridLines: PropTypes.bool,
    colors: PropTypes.array,
    onRenderlet: PropTypes.func,
    onPretransition: PropTypes.func,
    onFiltered: PropTypes.func,
    defined: PropTypes.func,
    children: function (props, propName, componentName) {
      const prop = props[propName];
      let error = null;
      React.Children.forEach(prop, function (child) {
        if (child.type !== XAxisLabel && child.type !== YAxisLabel && child.type !== XAxis && child.type !== YAxis) {
          error = new Error('`' + componentName + '` children should be of type `XAxis`, `YAxis`, `XAxisLabel` or `YAxisLabel`.');
        }
      });
      return error;
    }
  };

  loadChart = (container) => {
    if (container == null) {
      return;
    }

    const chart = dc.lineChart(container, this.props.chartGroup);
    const helper = this.props.chartHelper(this, chart);
    helper.setProperties('renderArea', 'xAxis', 'x', 'round', 'xUnits',
                         'elasticY', 'renderHorizontalGridLines', 'brushOn',
                         'valueAccessor', 'renderVerticalGridLines', 'colors',
                         'onPretransition', 'onRenderlet', 'onFiltered',
                         'defined', 'renderDataPoints')
          .setContextProperties('stack');

    React.Children.forEach(this.props.children, function (child) {
      if (child.type === XAxisLabel) {
        helper.setAxisLabel('x', child.props.label, child.props.padding);
      } else if (child.type === YAxisLabel) {
        helper.setAxisLabel('y', child.props.label, child.props.padding);
      } else if (child.type === XAxis) {
        helper.setAxis('x', child.props.ticks, child.props.tickFormat);
      } else if (child.type === YAxis) {
        helper.setAxis('y', child.props.ticks, child.props.tickFormat);
      }
    });

    chart.render();
  };

  render() {
    return <div className={this.props.className} ref={ this.loadChart } id={this.props.id} />;
  }
}

export default Base(LineChart);
