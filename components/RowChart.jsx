import React, { Component, PropTypes } from 'react';
import dc from 'dc';
import { Base } from './Base';


class RowChart extends Component {
  static propTypes = {
    elasticX: PropTypes.bool,
    xAxis: PropTypes.func,
    x: PropTypes.func,
    ordinalColors: PropTypes.array,
    onRenderlet: PropTypes.func,
    onPretransition: PropTypes.func
  };

  loadChart = (container) => {
    const chart = dc.rowChart(container);
    const helper = this.props.chartHelper(this, chart);
    helper.setProperties('elasticX', 'x', 'ordinalColors', 'onRenderlet', 'onPretransition');

    if (this.props.xAxis) {
      this.props.xAxis(chart.xAxis());
    }
    chart.render();
  };

  render() {
    return <div className={this.props.className} ref={ this.loadChart }/>;
  }
}

export default Base(RowChart);
