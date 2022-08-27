"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgNode1Connection = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  strokeLinecap: "round",
  d: "m13.5 7 3.5 3.5m-10 3 3.5 3.5m0-10L7 10.5m10 3L13.5 17"
}), React.createElement(_reactNativeSvg.Circle, {
  cx: 12,
  cy: 5.5,
  r: 2
}), React.createElement(_reactNativeSvg.Circle, {
  cx: 12,
  cy: 18.5,
  r: 2
}), React.createElement(_reactNativeSvg.Circle, {
  cx: 5.5,
  cy: 12,
  r: 2
}), React.createElement(_reactNativeSvg.Circle, {
  cx: 18.5,
  cy: 12,
  r: 2
}), React.createElement(_reactNativeSvg.Circle, {
  cx: 5.5,
  cy: 12,
  r: 0.5
}));

var _default = SvgNode1Connection;
exports.default = _default;
//# sourceMappingURL=Node1Connection.js.map