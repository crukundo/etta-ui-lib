"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgNoDollars = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, props), React.createElement(_reactNativeSvg.Circle, {
  cx: 12,
  cy: 12,
  r: 8.5
}), React.createElement(_reactNativeSvg.Path, {
  strokeLinejoin: "round",
  d: "m5.75 5.75 12.5 12.5"
}), React.createElement(_reactNativeSvg.Path, {
  strokeLinecap: "round",
  d: "M12 6v12"
}), React.createElement(_reactNativeSvg.Path, {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M14.567 9.37c-.17-.755-1.145-1.595-2.57-1.595-1.425 0-2.52.925-2.52 2.094 0 2.655 5.285 1.291 5.285 4.372 0 1.114-1.34 2.059-2.765 2.059s-2.411-.877-2.704-1.815"
}));

var _default = SvgNoDollars;
exports.default = _default;
//# sourceMappingURL=NoDollars.js.map