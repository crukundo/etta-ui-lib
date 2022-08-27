"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgMilk = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  d: "M14.054 5.985a.944.944 0 0 0-.836-.485h-2.402a.96.96 0 0 0-.865.526c-.566 1.134-1.83 3.877-1.943 5.97a.004.004 0 0 1-.004.004.004.004 0 0 0-.004.004V18.5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6.497a.003.003 0 0 0-.003-.003.003.003 0 0 1-.003-.003c-.1-2.39-1.368-4.965-1.94-6.012z"
}), React.createElement(_reactNativeSvg.Rect, {
  width: 6,
  height: 2,
  x: 9,
  y: 3.5,
  rx: 0.5
}), React.createElement(_reactNativeSvg.Path, {
  strokeLinecap: "round",
  d: "M10 12.5V18"
}));

var _default = SvgMilk;
exports.default = _default;
//# sourceMappingURL=Milk.js.map