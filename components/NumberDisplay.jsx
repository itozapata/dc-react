import React, { PropTypes, Component } from 'react';
import dc from 'dc';
import { Base } from './Base';

class NumberDisplay extends Component {
  static PropTypes = {
    valueAccessor: PropTypes.func,
    formatNumber: PropTypes.func
  };

  loadChart = (container) => {
    const chart = dc.numberDisplay(container);
    const helper = this.props.chartHelper(this, chart);
    helper.setProperties('valueAccessor', 'formatNumber');

    chart.render();
  };

  render() {
    return (
      <div className={this.props.className} ref={this.loadChart} />
    );
  }
}

export default Base(DataCount);