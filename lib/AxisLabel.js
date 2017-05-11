'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YAxisLabel = exports.XAxisLabel = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AxisLabel = function (_Component) {
  _inherits(AxisLabel, _Component);

  function AxisLabel() {
    _classCallCheck(this, AxisLabel);

    return _possibleConstructorReturn(this, (AxisLabel.__proto__ || Object.getPrototypeOf(AxisLabel)).apply(this, arguments));
  }

  return AxisLabel;
}(_react.Component);

AxisLabel.propTypes = {
  label: _propTypes2.default.string.isRequired,
  padding: _propTypes2.default.number
};

var XAxisLabel = exports.XAxisLabel = function (_AxisLabel) {
  _inherits(XAxisLabel, _AxisLabel);

  function XAxisLabel() {
    _classCallCheck(this, XAxisLabel);

    return _possibleConstructorReturn(this, (XAxisLabel.__proto__ || Object.getPrototypeOf(XAxisLabel)).apply(this, arguments));
  }

  return XAxisLabel;
}(AxisLabel);

var YAxisLabel = exports.YAxisLabel = function (_AxisLabel2) {
  _inherits(YAxisLabel, _AxisLabel2);

  function YAxisLabel() {
    _classCallCheck(this, YAxisLabel);

    return _possibleConstructorReturn(this, (YAxisLabel.__proto__ || Object.getPrototypeOf(YAxisLabel)).apply(this, arguments));
  }

  return YAxisLabel;
}(AxisLabel);