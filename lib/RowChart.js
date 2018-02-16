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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RowChart = function (_Component) {
  _inherits(RowChart, _Component);

  function RowChart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RowChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RowChart.__proto__ || Object.getPrototypeOf(RowChart)).call.apply(_ref, [this].concat(args))), _this), _this.loadChart = function (container) {
      if (container == null) {
        return;
      }

      var chart = _dc2.default.rowChart(container, _this.props.chartGroup);
      var helper = _this.props.chartHelper(_this, chart);
      helper.setProperties('elasticX', 'x', 'ordinalColors', 'onRenderlet', 'onPretransition', 'colors', 'colorAccessor', 'wrapLabelWidth', 'onFiltered', 'title', 'valueAccessor', 'cap', 'othersGrouper');

      if (_this.props.xAxis) {
        _this.props.xAxis(chart.xAxis());
      }
      chart.render();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RowChart, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: this.props.className, ref: this.loadChart, id: this.props.id });
    }
  }]);

  return RowChart;
}(_react.Component);

RowChart.propTypes = {
  elasticX: _propTypes2.default.bool,
  xAxis: _propTypes2.default.func,
  x: _propTypes2.default.func,
  ordinalColors: _propTypes2.default.array,
  onRenderlet: _propTypes2.default.func,
  onPretransition: _propTypes2.default.func,
  colors: _propTypes2.default.func,
  colorAccessor: _propTypes2.default.func,
  wrapLabelWidth: _propTypes2.default.number,
  onFiltered: _propTypes2.default.func,
  title: _propTypes2.default.func,
  valueAccessor: _propTypes2.default.func,
  cap: _propTypes2.default.number,
  othersGrouper: _propTypes2.default.func,
};
exports.default = (0, _Base.Base)(RowChart);