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

var BarChart = function (_Component) {
  _inherits(BarChart, _Component);

  function BarChart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BarChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BarChart.__proto__ || Object.getPrototypeOf(BarChart)).call.apply(_ref, [this].concat(args))), _this), _this.loadChart = function (container) {
      if (container == null) {
        return;
      }

      var chart = _dc2.default.barChart(container, _this.props.chartGroup);
      var helper = _this.props.chartHelper(_this, chart);
      helper.setProperties('elasticY', 'centerBar', 'gap', 'round', 'alwaysUseRounding', 'x', 'y', 'xUnits', 'renderHorizontalGridLines', 'filterPrinter', 'ordinalColors', 'onRenderlet', 'brushOn', 'clipPadding', 'valueAccessor');

      _react2.default.Children.forEach(_this.props.children, function (child) {
        if (child.type === _index.XAxisLabel) {
          helper.setAxisLabel('x', child.props.label, child.props.padding);
        } else if (child.type === _index.YAxisLabel) {
          helper.setAxisLabel('y', child.props.label, child.props.padding);
        } else if (child.type === _index.XAxis) {
          helper.setAxis('x', child.props.ticks, child.props.tickFormat);
        } else if (child.type === _index.YAxis) {
          helper.setAxis('y', child.props.ticks, child.props.tickFormat);
        }
      });

      chart.render();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BarChart, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: this.props.className, ref: this.loadChart, id: this.props.id });
    }
  }]);

  return BarChart;
}(_react.Component);

BarChart.propTypes = {
  elasticY: _react.PropTypes.bool,
  centerBar: _react.PropTypes.bool,
  gap: _react.PropTypes.number,
  round: _react.PropTypes.func,
  alwaysUseRounding: _react.PropTypes.bool,
  x: _react.PropTypes.func,
  y: _react.PropTypes.func,
  xUnits: _react.PropTypes.func,
  renderHorizontalGridLines: _react.PropTypes.bool,
  filterPrinter: _react.PropTypes.func,
  ordinalColors: _react.PropTypes.array,
  onRenderlet: _react.PropTypes.func,
  brushOn: _react.PropTypes.bool,
  clipPadding: _react.PropTypes.number,
  valueAccessor: _react.PropTypes.func,
  children: function children(props, propName, componentName) {
    var prop = props[propName];
    var error = null;
    _react2.default.Children.forEach(prop, function (child) {
      if (child.type !== _index.XAxisLabel && child.type !== _index.YAxisLabel && child.type !== _index.XAxis && child.type !== _index.YAxis) {
        error = new Error('`' + componentName + '` children should be of type `XAxis`, `YAxis`, `XAxisLabel` or `YAxisLabel`.');
      }
    });
    return error;
  }
};
exports.default = (0, _Base.Base)(BarChart);