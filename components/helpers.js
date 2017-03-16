class ChartPropertyHelper {
  constructor(component, chart) {
    this.component = component;
    this.chart = chart;
  }

  get props() {
    return this.component.props;
  }

  setProperties(...keys) {
    for (let key of keys) {
      this.setProperty(key);
    }
    return this;
  }

  setContextProperties(...keys) {
    for (let key of keys) {
      this.setContextProperty(key);
    }
    return this;
  }

  setProperty(key) {
    if (key.match(/^on/)) {
      return this.setOn(key);
    }

    if (key.match(/Axis$/) && typeof this.props[key] === 'function') {
      return this.setAxis(key);
    }

    if (key.match(/AxisLabel$/)) {
      return this.setObjectProperty(key);
    }

    if (this.props.hasOwnProperty(key)) {
      this.chart[key](this.props[key]);
    }
    return this;
  }

  setContextProperty(key) {
    if (this.props.hasOwnProperty(key)) {
      let func = this.props[key];
      if (func) {
        const val = func(this.props.crossfilterContext);
        if (val) {
          if (Array.isArray(val)) {
            this.chart[key](...val);
          } else {
            this.chart[key](val);
          }
        }
      }
    }
    return this;
  }

  setOn(key) {
    if (this.props.hasOwnProperty(key)) {
      var event = key.replace(/^on/, '');
      event = event.charAt(0).toLowerCase() + event.slice(1);
      this.chart.on(event, this.props[key]);
    }
    return this;
  }

  setAxis(axis, ticks, tickFormat) {
    if (axis === 'x') {
      if (ticks) {
        this.chart.xAxis().ticks(ticks);
      }
      if (tickFormat) {
        this.chart.xAxis().tickFormat(tickFormat);
      }
    } else if (axis === 'y') {
      if (ticks) {
        this.chart.yAxis().ticks(ticks);
      }
      if (tickFormat) {
        this.chart.yAxis().tickFormat(tickFormat);
      }
    }
    return this;
  }

  setAxisLabel(axis, label, padding) {
    if (axis === 'x') {
      this.chart.xAxisLabel(label, padding);
    } else if (axis === 'y') {
      this.chart.yAxisLabel(label, padding);
    }
    return this;
  }

  setOverlayGeoJson(json, name, keyAccessor) {
    this.chart.overlayGeoJson(json, name, keyAccessor);
    return this;
  }

  setZoom(width, height, scale, projection) {
    let path = d3.geo.path()
      .projection(projection);

    let chart = this.chart;
    let zoom = d3.behavior.zoom()
      .translate([width / 2, height / 2])
      .scale(scale)
      .scaleExtent([scale / 4, 8 * scale])
      .on('zoom', () => {
        projection
          .translate(d3.event.translate)
          .scale(d3.event.scale);

        // performance issue to resolve...
        // see http://stackoverflow.com/a/17094912/504477
        chart.select('svg')
          .selectAll('g path')
          .attr('d', path);
      });

    chart.select('svg')
      .call(zoom)
      .call(zoom.event);
  }

  setColorLegend(width, height, colors, minValue, maxValue, labelY, legendY, size, labelValueFormat, locale) {
    // append legend
    let svg = this.chart.select('svg')
    svg.selectAll('.color-legend').remove();
    let legend = svg.append('g').classed('color-legend', true);
    let maxColor = colors.indexOf(this.chart.getColor(maxValue));
    let format = locale.numberFormat(labelValueFormat ? labelValueFormat : ',.d');

    // fill legend
    let offset = 5;
    let maxLabelOffset = offset * 2;
    for (let c = 0; c <= maxColor; c++) {
      if (c === 0) {
        legend.append('text')
          .attr('x', offset)
          .attr('y', labelY)
          .text(`min: ${format(0)}`)
          .each(function(d) {
            maxLabelOffset += this.getBBox().width;
          });
      } else if (c === maxColor){
        legend.append('text')
          .attr('x', maxLabelOffset)
          .attr('y', labelY)
          .text(`max: ${format(maxValue)}`);
      }

      legend.append('rect')
        .attr('x', offset + c * size)
        .attr('y', legendY)
        .attr('width', size)
        .attr('height', size)
        .attr('fill', colors[c]);
    }
  }
}

export {
  ChartPropertyHelper
};
