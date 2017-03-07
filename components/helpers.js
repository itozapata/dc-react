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
}

export {
  ChartPropertyHelper
};
