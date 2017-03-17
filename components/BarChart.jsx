import React, { Component, PropTypes } from 'react';
import dc from 'dc';
import { Base } from './Base';
import { XAxisLabel, YAxisLabel, XAxis, YAxis } from './index';

class BarChart extends Component {
  static propTypes = {
    elasticY: PropTypes.bool,
    centerBar: PropTypes.bool,
    gap: PropTypes.number,
    round: PropTypes.func,
    alwaysUseRounding: PropTypes.bool,
    x: PropTypes.func,
    y: PropTypes.func,
    xUnits: PropTypes.func,
    renderHorizontalGridLines: PropTypes.bool,
    filterPrinter: PropTypes.func,
    ordinalColors: PropTypes.array,
    onRenderlet: PropTypes.func,
    brushOn: PropTypes.bool,
    clipPadding: PropTypes.number,
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
    const chart = dc.barChart(container);
    const helper = this.props.chartHelper(this, chart);
    helper.setProperties('elasticY', 'centerBar', 'gap', 'round',
                         'alwaysUseRounding', 'x', 'y', 'xUnits', 
                         'renderHorizontalGridLines', 'filterPrinter', 
                         'ordinalColors', 'onRenderlet', 'brushOn',
                         'clipPadding');

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
    return <div className={this.props.className} ref={ this.loadChart }/>;
  }
}

export default Base(BarChart);
