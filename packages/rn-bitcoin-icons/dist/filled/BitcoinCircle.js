"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgBitcoinCircle = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  d: "m11.283 10.967-.05-.015.528-2.117.212.05c.706.157 2.225.498 1.95 1.613-.295 1.173-2.049.646-2.64.469zm-.913 3.438.086.025c.728.217 2.796.832 3.076-.333.289-1.121-1.57-1.558-2.402-1.753-.091-.022-.17-.04-.232-.056l-.528 2.117z"
}), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm3.873-10.384c.206-1.302-.693-1.98-1.94-2.438l.438-1.77-.99-.246-.427 1.726-.193-.05c-.196-.05-.389-.1-.587-.144l.428-1.725-1.017-.252-.428 1.725-2.018-.5-.292 1.18s.749.163.721.179c.4.108.469.392.447.609l-.509 2.007-.698 2.823c-.055.134-.19.326-.464.26a22.05 22.05 0 0 1-.728-.191l-.486 1.245 1.958.534-.436 1.761.983.244.437-1.762c.158.046.318.083.473.119.116.027.229.053.336.082l-.437 1.761.985.244.437-1.761c1.695.323 2.975.172 3.547-1.497.46-1.33.03-2.09-.863-2.589.67-.163 1.167-.627 1.323-1.574z",
  clipRule: "evenodd"
}));

var _default = SvgBitcoinCircle;
exports.default = _default;
//# sourceMappingURL=BitcoinCircle.js.map