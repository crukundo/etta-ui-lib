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
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  d: "M20.247 14.052a8.502 8.502 0 0 1-10.302 6.194C5.394 19.11 2.62 14.5 3.754 9.95c1.134-4.551 5.74-7.33 10.288-6.195 4.562 1.12 7.337 5.744 6.205 10.298z"
}), React.createElement(_reactNativeSvg.Path, {
  strokeLinecap: "square",
  strokeLinejoin: "round",
  d: "m9.4 14.912 1.693-6.792m-1.456-.363L13.818 8.8c2.728.68 2.12 3.877-.786 3.153 3.184.794 2.86 4.578-.907 3.639-1.841-.46-3.813-.95-3.813-.95m1.994-3.368 2.669.665m-1.397-3.698.363-1.455m-2.42 9.703.363-1.456m3.634-6.308.363-1.455m-2.419 9.703.363-1.456"
}));

var _default = SvgBitcoinCircle;
exports.default = _default;
//# sourceMappingURL=BitcoinCircle.js.map