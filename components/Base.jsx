import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ChartPropertyHelper } from './helpers';

export let Base = DCComponent => class extends Component {
  static propTypes = {
    id: PropTypes.string,
    dimension: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.object.isRequired]),
    group: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.object.isRequired]),
    width: PropTypes.number,
    height: PropTypes.number,
    title: PropTypes.func,
    label: PropTypes.func,
    transitionDuration: PropTypes.number,
    margins: PropTypes.object,
    mouseZoomable: PropTypes.bool,
    legend: PropTypes.object,
    setChart: PropTypes.func,
    renderLabel: PropTypes.bool,
    renderTitle: PropTypes.bool,
    chartGroup: PropTypes.string,
    filterHandler: PropTypes.func,
    onClick: PropTypes.func,
    serverSide: PropTypes.bool
  };

  static contextTypes = {
    crossfilterContext: PropTypes.object.isRequired
  };

  dcHelper = (dcComponent, dcChart, loadDefault = true) => {
    let helper = new ChartPropertyHelper(dcComponent, dcChart);
    if (loadDefault) {
      helper.setProperties('width', 'height', 'title', 'label',
                           'transitionDuration', 'margins', 'mouseZoomable',
                           'legend', 'renderLabel', 'renderTitle',
                           'filterHandler', 'onClick');
      if (dcComponent.props.serverSide) {
        helper.setProperties('dimension', 'group');
      } else {
        helper.setContextProperties('dimension', 'group');
      }
    }
    if (dcComponent.props.setChart) {
      dcComponent.props.setChart(dcChart);
    }

    this._dcChart = dcChart;
    return helper;
  };

  width = (width) => {
    this._dcChart.width(width).redraw().render();
  }

  render() {
    return <DCComponent {...this.props}
                        crossfilterContext={this.context.crossfilterContext}
                        chartHelper={this.dcHelper}
                        redraw={this.redraw} />;
  }
};
