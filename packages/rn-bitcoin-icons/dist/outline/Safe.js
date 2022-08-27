"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgSafe = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, props), React.createElement(_reactNativeSvg.Rect, {
  width: 13,
  height: 13,
  x: 5.5,
  y: 5.5,
  rx: 1
}), React.createElement(_reactNativeSvg.Rect, {
  width: 9,
  height: 9,
  x: 7.5,
  y: 7.5,
  rx: 0.5
}), React.createElement(_reactNativeSvg.Path, {
  strokeLinecap: "square",
  d: "M8.5 19.5h-1m9 0h-1"
}), React.createElement(_reactNativeSvg.Circle, {
  cx: 12,
  cy: 12,
  r: 1.25
}), React.createElement(_reactNativeSvg.Path, {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M9.5 9.5 11 11m-1.5 3.5L11 13m2 0 1.5 1.5M13 11l1.5-1.5"
}));

var _default = SvgSafe;
exports.default = _default;
//# sourceMappingURL=Safe.js.map