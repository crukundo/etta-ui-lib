"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgWallet = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  d: "M15 17.5h3.005a1.5 1.5 0 0 0 1.5-1.5V8a1.5 1.5 0 0 0-1.5-1.5H15A1.5 1.5 0 0 1 16.5 8v8a1.5 1.5 0 0 1-1.5 1.5z"
}), React.createElement(_reactNativeSvg.Rect, {
  width: 12,
  height: 11,
  x: 4.5,
  y: 6.5,
  rx: 1.5
}), React.createElement(_reactNativeSvg.Circle, {
  cx: 8.75,
  cy: 11.75,
  r: 1.25
}));

var _default = SvgWallet;
exports.default = _default;
//# sourceMappingURL=Wallet.js.map