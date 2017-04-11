import React, { Component, PropTypes } from 'react';
import dc from 'dc';
import { Base } from './Base';
import { ValueLegend } from './index';

class PieChart extends Component {
  static PropTypes = {
    radius: PropTypes.number.isRequired,
    innerRadius: PropTypes.number,
    ordinalColors: PropTypes.array,
    onPretransition: PropTypes.func,
    onRenderlet: PropTypes.func,
    legend: PropTypes.func,
    externalRadiusPadding: PropTypes.number,
    cx: PropTypes.number,
    cy: PropTypes.number,
    valueAccessor: PropTypes.func,
    keyAccessor: PropTypes.func,
    colors: PropTypes.func,
    colorAccessor: PropTypes.func
  };

  loadChart = (container) => {
    if (container == null) {
      return;
    }
    
    const chart = dc.pieChart(container, this.props.chartGroup);
    const helper = this.props.chartHelper(this, chart);
    helper.setProperties('radius', 'innerRadius', 'ordinalColors', 
                         'onPretransition', 'legend', 'onRenderlet',
                         'externalRadiusPadding', 'cx', 'cy',
                         'valueAccessor', 'keyAccessor', 'colors',
                         'colorAccessor');

    chart.render();
  };

  render() {
    return <div className={this.props.className} ref={this.loadChart} id={this.props.id} />;
  }
}

export default Base(PieChart);
