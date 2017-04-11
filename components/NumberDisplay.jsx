import React, { PropTypes, Component } from 'react';
import dc from 'dc';
import { Base } from './Base';

class NumberDisplay extends Component {
  static PropTypes = {
    valueAccessor: PropTypes.func,
    formatNumber: PropTypes.func,
    onPretransition: PropTypes.func,
    html: PropTypes.object
  };

  loadChart = (container) => {
    if (container == null) {
      return;
    }
    
    const chart = dc.numberDisplay(container, this.props.chartGroup);
    const helper = this.props.chartHelper(this, chart);
    helper.setProperties('valueAccessor', 'formatNumber', 'onPretransition',
                         'html');

    chart.render();
  };

  render() {
    return (
      <div className={this.props.className} ref={this.loadChart} id={this.props.id} id={this.props.id} />
    );
  }
}

export default Base(NumberDisplay);