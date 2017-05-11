import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dc from 'dc';
import { Base } from './Base';

class DataTable extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired,
  };

  loadChart = (container) => {
    if (container == null) {
      return;
    }
    
    const chart = dc.dataTable(container, this.props.chartGroup);
    const helper = this.props.chartHelper(this, chart, false);
    helper.setContextProperties('dimension')
          .setProperties('columns', 'group');

    chart.render();
  };

  render() {
    return (
      <div className={this.props.className} ref={this.loadChart} id={this.props.id} />
    );
  }
}

export default Base(DataTable);
