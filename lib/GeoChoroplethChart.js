'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
      var chart = _dc2.default.geoChoroplethChart(container);
      var helper = _this.props.chartHelper(_this, chart);
      helper.setProperties('projection', 'colors', 'colorDomain', 'valueAccessor', 'onPreRedraw');

      _react2.default.Children.forEach(_this.props.children, function (child) {
        if (child.type === _index.OverlayGeoJson) {
          helper.setOverlayGeoJson(child.props.json, child.props.name, child.props.keyAccessor);
        }
        if (child.type === _index.Zoom) {
          helper.setZoom(child.props.width, child.props.height, child.props.scale, child.props.projection);
        }
      });

      chart.render();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GeoChoroplethChart, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: this.props.className, ref: this.loadChart });
    }
  }]);

  return GeoChoroplethChart;
}(_react.Component);

GeoChoroplethChart.propTypes = {
  projection: _react.PropTypes.func.isRequired,
  colors: _react.PropTypes.array.isRequired,
  colorDomain: _react.PropTypes.array.isRequired,
  valueAccessor: _react.PropTypes.func,
  onPreRedraw: _react.PropTypes.func,
  children: function children(props, propName, componentName) {
    var prop = props[propName];
    var error = null;
    _react2.default.Children.forEach(prop, function (child) {
      if (child.type !== _index.OverlayGeoJson && child.type !== _index.Zoom) {
        error = new Error('`' + componentName + '` children should be of type `OverlayGeoJson` or `Zoom`.');
      }
    });
    return error;
  }
};
exports.default = (0, _Base.Base)(GeoChoroplethChart);