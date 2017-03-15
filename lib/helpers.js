'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChartPropertyHelper = function () {
  function ChartPropertyHelper(component, chart) {
    _classCallCheck(this, ChartPropertyHelper);

    this.component = component;
    this.chart = chart;
  }

  _createClass(ChartPropertyHelper, [{
    key: 'setProperties',
    value: function setProperties() {
      for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
        keys[_key] = arguments[_key];
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          this.setProperty(key);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return this;
    }
  }, {
    key: 'setContextProperties',
    value: function setContextProperties() {
      for (var _len2 = arguments.length, keys = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        keys[_key2] = arguments[_key2];
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var key = _step2.value;

          this.setContextProperty(key);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return this;
    }
  }, {
    key: 'setProperty',
    value: function setProperty(key) {
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
  }, {
    key: 'setContextProperty',
    value: function setContextProperty(key) {
      if (this.props.hasOwnProperty(key)) {
        var func = this.props[key];
        if (func) {
          var val = func(this.props.crossfilterContext);
          if (Array.isArray(val)) {
            var _chart;

            (_chart = this.chart)[key].apply(_chart, _toConsumableArray(val));
          } else {
            this.chart[key](val);
          }
        }
      }
      return this;
    }
  }, {
    key: 'setOn',
    value: function setOn(key) {
      if (this.props.hasOwnProperty(key)) {
        var event = key.replace(/^on/, '');
        event = event.charAt(0).toLowerCase() + event.slice(1);
        this.chart.on(event, this.props[key]);
      }
      return this;
    }
  }, {
    key: 'setAxis',
    value: function setAxis(axis, ticks, tickFormat) {
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
  }, {
    key: 'setAxisLabel',
    value: function setAxisLabel(axis, label, padding) {
      if (axis === 'x') {
        this.chart.xAxisLabel(label, padding);
      } else if (axis === 'y') {
        this.chart.yAxisLabel(label, padding);
      }
      return this;
    }
  }, {
    key: 'setOverlayGeoJson',
    value: function setOverlayGeoJson(json, name, keyAccessor) {
      this.chart.overlayGeoJson(json, name, keyAccessor);
      return this;
    }
  }, {
    key: 'setZoom',
    value: function setZoom(width, height, scale, projection) {
      var path = d3.geo.path().projection(projection);

      var chart = this.chart;
      var zoom = d3.behavior.zoom().translate([width / 2, height / 2]).scale(scale).scaleExtent([scale / 4, 8 * scale]).on('zoom', function () {
        projection.translate(d3.event.translate).scale(d3.event.scale);

        // performance issue to resolve...
        // see http://stackoverflow.com/a/17094912/504477
        chart.select('svg').selectAll('g path').attr('d', path);
      });

      chart.select('svg').call(zoom).call(zoom.event);
    }
  }, {
    key: 'setColorLegend',
    value: function setColorLegend(width, height, colors, minValue, maxValue, labelY, legendY, size, labelValueFormat, locale) {
      // append legend
      var svg = this.chart.select('svg');
      svg.selectAll('.color-legend').remove();
      var legend = svg.append('g').classed('color-legend', true);
      var maxColor = colors.indexOf(this.chart.getColor(maxValue));
      var format = locale.numberFormat(labelValueFormat ? labelValueFormat : ',.d');

      // fill legend
      var offset = 5;
      var maxLabelOffset = offset * 2;
      for (var c = 0; c <= maxColor; c++) {
        if (c === 0) {
          legend.append('text').attr('x', offset).attr('y', labelY).text('min: ' + format(0)).each(function (d) {
            maxLabelOffset += this.getBBox().width;
          });
        } else if (c === maxColor) {
          legend.append('text').attr('x', maxLabelOffset).attr('y', labelY).text('max: ' + format(maxValue));
        }

        legend.append('rect').attr('x', offset + c * size).attr('y', legendY).attr('width', size).attr('height', size).attr('fill', colors[c]);
      }
    }
  }, {
    key: 'props',
    get: function get() {
      return this.component.props;
    }
  }]);

  return ChartPropertyHelper;
}();

exports.ChartPropertyHelper = ChartPropertyHelper;