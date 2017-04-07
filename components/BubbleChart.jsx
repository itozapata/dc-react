import React, { Component, PropTypes } from 'react';
import dc from 'dc';
import { Base } from './Base';

class BubbleChart extends Component {
  static propTypes = {
    colorAccessor: PropTypes.func,
    keyAccessor: PropTypes.func,
    valueAccessor: PropTypes.func,
    radiusValueAccessor: PropTypes.func,
    x: PropTypes.func,
    y: PropTypes.func,
    r: PropTypes.func,
    colorDomain: PropTypes.array
  };

  loadChart = (container) => {
    if (container == null) {
      return;
    }
    
    const chart = dc.bubbleChart(container);
    const helper = this.props.chartHelper(this, chart);
    helper.setProperties('colorAccessor', 'keyAccessor',
                         'valueAccessor', 'radiusValueAccessor', 'x', 'y', 'r',
                         'colorDomain');
    chart.render();
  };

  render() {
    return (
      <div className={this.props.className} ref={this.loadChart} id={this.props.id} />
    );
  }
}

export default Base(BubbleChart);
