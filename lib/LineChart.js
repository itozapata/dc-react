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

var LineChart = function (_Component) {
  _inherits(LineChart, _Component);

  function LineChart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LineChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LineChart.__proto__ || Object.getPrototypeOf(LineChart)).call.apply(_ref, [this].concat(args))), _this), _this.loadChart = function (container) {
      if (container == null) {
        return;
      }

      var chart = _dc2.default.lineChart(container);
      var helper = _this.props.chartHelper(_this, chart);
      helper.setProperties('renderArea', 'xAxis', 'x', 'round', 'xUnits', 'elasticY', 'renderHorizontalGridLines', 'brushOn', 'valueAccessor', 'renderVerticalGridLines', 'colors', 'onPretransition', 'onRenderlet', 'onFiltered').setContextProperties('stack');

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

  _createClass(LineChart, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: this.props.className, ref: this.loadChart, id: this.props.id });
    }
  }]);

  return LineChart;
}(_react.Component);

LineChart.propTypes = {
  renderArea: _react.PropTypes.bool,
  xAxis: _react.PropTypes.func,
  x: _react.PropTypes.func,
  round: _react.PropTypes.func,
  xUnits: _react.PropTypes.func,
  elasticY: _react.PropTypes.bool,
  renderHorizontalGridLines: _react.PropTypes.bool,
  brushOn: _react.PropTypes.bool,
  valueAccessor: _react.PropTypes.func,
  stack: _react.PropTypes.func,
  renderVerticalGridLines: _react.PropTypes.bool,
  colors: _react.PropTypes.array,
  onRenderlet: _react.PropTypes.func,
  onPretransition: _react.PropTypes.func,
  onFiltered: _react.PropTypes.func,
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
exports.default = (0, _Base.Base)(LineChart);