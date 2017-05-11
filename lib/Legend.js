'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorLegend = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorLegend = exports.ColorLegend = function (_Component) {
  _inherits(ColorLegend, _Component);

  function ColorLegend() {
    _classCallCheck(this, ColorLegend);

    return _possibleConstructorReturn(this, (ColorLegend.__proto__ || Object.getPrototypeOf(ColorLegend)).apply(this, arguments));
  }

  return ColorLegend;
}(_react.Component);

ColorLegend.propTypes = {
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  colors: _propTypes2.default.array.isRequired,
  minValue: _propTypes2.default.number.isRequired,
  maxValue: _propTypes2.default.number.isRequired,
  labelY: _propTypes2.default.number.isRequired,
  legendY: _propTypes2.default.number.isRequired,
  size: _propTypes2.default.number.isRequired,
  labelValueFormat: _propTypes2.default.string,
  locale: _propTypes2.default.object
};