"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgTwoKeys = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, props), React.createElement(_reactNativeSvg.G, {
  clipPath: "url(#two-keys_svg__a)"
}, React.createElement(_reactNativeSvg.Path, {
  strokeLinecap: "round",
  d: "M14.257 5.976c-.85-1.7-2.832-2.638-4.802-2.147-2.27.566-3.663 2.815-3.112 5.023.157.633.458 1.194.86 1.659l-2.709 4.37a1.5 1.5 0 0 0-.18 1.153l.36 1.44a.25.25 0 0 0 .302.183l1.528-.381a1.5 1.5 0 0 0 .912-.666l2.884-4.655"
}), React.createElement(_reactNativeSvg.Ellipse, {
  cx: 10.82,
  cy: 7.266,
  rx: 1.059,
  ry: 1.03,
  transform: "rotate(-14 10.82 7.266)"
}), React.createElement(_reactNativeSvg.Path, {
  d: "M17.81 15.61c2.27-.566 3.664-2.815 3.113-5.023-.55-2.209-2.837-3.54-5.106-2.974-2.27.566-3.663 2.815-3.113 5.023.158.633.458 1.194.86 1.659l-2.708 4.37a1.5 1.5 0 0 0-.18 1.153l.359 1.44a.25.25 0 0 0 .303.183l1.527-.381a1.5 1.5 0 0 0 .912-.666l2.885-4.655c.378.008.763-.033 1.149-.129z"
}), React.createElement(_reactNativeSvg.Ellipse, {
  cx: 17.203,
  cy: 10.984,
  rx: 1.059,
  ry: 1.03,
  transform: "rotate(-14 17.203 10.984)"
})), React.createElement(_reactNativeSvg.Defs, null, React.createElement(_reactNativeSvg.ClipPath, {
  id: "two-keys_svg__a"
}, React.createElement(_reactNativeSvg.Path, {
  fill: "#fff",
  d: "M0 0h24v24H0z"
}))));

var _default = SvgTwoKeys;
exports.default = _default;
//# sourceMappingURL=TwoKeys.js.map