import React, { PropTypes, Component } from 'react';
import dc from 'dc';
import { Base } from './Base';

class DataCount extends Component {
  static PropTypes = {
    formatNumber: PropTypes.func,
    html: PropTypes.object,
    onRenderlet: PropTypes.func,
  };

  loadChart = (container) => {
    if (container == null) {
      return;
    }
    
    const chart = dc.dataCount(container, this.props.chartGroup);
    const helper = this.props.chartHelper(this, chart);
    helper.setProperties('formatNumber', 'html', 'onRenderlet');

    chart.render();
  };

  render() {
    return (
      <div className={this.props.className} ref={this.loadChart} id={this.props.id} id={this.props.id} />
    );
  }
}

export default Base(DataCount);