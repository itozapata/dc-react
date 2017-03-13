'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Zoom = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Zoom = exports.Zoom = function (_Component) {
  _inherits(Zoom, _Component);

  function Zoom() {
    _classCallCheck(this, Zoom);

    return _possibleConstructorReturn(this, (Zoom.__proto__ || Object.getPrototypeOf(Zoom)).apply(this, arguments));
  }

  return Zoom;
}(_react.Component);

Zoom.propTypes = {
  width: _react.PropTypes.number,
  height: _react.PropTypes.number,
  scale: _react.PropTypes.number,
  projection: _react.PropTypes.func
};