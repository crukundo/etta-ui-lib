"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgBlock = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  d: "M20.54 8.676v6.876a.694.694 0 0 1-.355.644l-7.132 4.024a2.096 2.096 0 0 1-2.056.002L3.82 16.197a.694.694 0 0 1-.355-.66V8.694a.694.694 0 0 1 .345-.654l7.156-4.172a2.097 2.097 0 0 1 2.117.002l7.112 4.17a.693.693 0 0 1 .344.636z"
}), React.createElement(_reactNativeSvg.Path, {
  d: "M3.82 9.253a.699.699 0 0 1-.01-1.213l7.156-4.172a2.097 2.097 0 0 1 2.117.002l7.112 4.17a.699.699 0 0 1-.01 1.212l-7.132 4.024a2.096 2.096 0 0 1-2.056.003L3.82 9.253z"
}));

var _default = SvgBlock;
exports.default = _default;
//# sourceMappingURL=Block.js.map