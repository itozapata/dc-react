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
        if (Array.isArray(val)) {
          this.chart[key](...val);
        } else {
          this.chart[key](val);
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

    let zoom = d3.behavior.zoom()
      .translate([width / 2, height / 2])
      .scale(scale)
      .scaleExtent([scale / 4, 8 * scale])
      .on('zoom', zoomed);

    let chart = this.chart;
    chart.select('svg')
      .call(zoom)
      .call(zoom.event);

    var zoomed = () => {
      projection
        .translate(zoom.translate())
        .scale(zoom.scale());

      chart.select('svg')
        .selectAll('g path')
        .attr('d', path);
    };
  }

  setColorLegend(width, height, colors, minValue, maxValue, labelY, legendY, size) {
    // append legend
    let svg = this.chart.select('svg')
    svg.selectAll('.color-legend').remove();
    let legend = svg.append('g').attr('class', 'color-legend');
    let maxColor = colors.indexOf(this.chart.getColor(maxValue));

    // fill legend
    let offset = 5;
    for (let c = 0; c <= maxColor; c++){
      let labelX = 0;
      let value = '';
      if (c === 0) {
        value = 'min: 0';
        labelX = offset;
      } else if (c === maxColor){
        maxValue = d3.format(',.d')(maxValue);
        value = `max: ${maxValue}`;
        labelX = 50;
      }

      legend.append('text')
        .attr('x', labelX)
        .attr('y', labelY)
        .text(value);
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
