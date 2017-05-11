'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dc = require('dc');

var _dc2 = _interopRequireDefault(_dc);

var _Base = require('./Base');

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeoChoroplethChart = function (_Component) {
  _inherits(GeoChoroplethChart, _Component);

  function GeoChoroplethChart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GeoChoroplethChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GeoChoroplethChart.__proto__ || Object.getPrototypeOf(GeoChoroplethChart)).call.apply(_ref, [this].concat(args))), _this), _this.loadChart = function (container) {
      if (container == null) {
        return;
      }

      var chart = _dc2.default.geoChoroplethChart(container, _this.props.chartGroup);
      var helper = _this.props.chartHelper(_this, chart);
      helper.setProperties('projection', 'colors', 'colorDomain', 'valueAccessor', 'onPreRedraw', 'onRenderlet', 'onFiltered');

      _react2.default.Children.forEach(_this.props.children, function (child) {
        if (child.type === _index.OverlayGeoJson) {
          helper.setOverlayGeoJson(child.props.json, child.props.name, child.props.keyAccessor);
        }
      });

      chart.render();

      _react2.default.Children.forEach(_this.props.children, function (child) {
        if (child.type === _index.Zoom) {
          chart._zoom = helper.setZoom(child.props.width, child.props.height, child.props.scale, child.props.projection);
        }
        if (child.type === _index.ColorLegend) {
          helper.setColorLegend(child.props.width, child.props.height, child.props.colors, child.props.minValue, child.props.maxValue, child.props.labelY, child.props.legendY, child.props.size, child.props.labelValueFormat, child.props.locale);
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GeoChoroplethChart, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: this.props.className, ref: this.loadChart, id: this.props.id });
    }
  }]);

  return GeoChoroplethChart;
}(_react.Component);

GeoChoroplethChart.propTypes = {
  projection: _propTypes2.default.func.isRequired,
  colors: _propTypes2.default.array.isRequired,
  colorDomain: _propTypes2.default.array.isRequired,
  valueAccessor: _propTypes2.default.func,
  onPreRedraw: _propTypes2.default.func,
  onRenderlet: _propTypes2.default.func,
  onFiltered: _propTypes2.default.func,
  children: function children(props, propName, componentName) {
    var prop = props[propName];
    var error = null;
    _react2.default.Children.forEach(prop, function (child) {
      if (child.type !== _index.OverlayGeoJson && child.type !== _index.Zoom && child.type !== _index.ColorLegend) {
        error = new Error('`' + componentName + '` children should be of type `OverlayGeoJson`, `Zoom` or `ColorLegend`.');
      }
    });
    return error;
  }
};
exports.default = (0, _Base.Base)(GeoChoroplethChart);