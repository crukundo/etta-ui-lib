"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgBitcoin = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  d: "M10.521 7.95v2.927c1.21.076 3.737.067 3.737-1.43 0-1.497-2.126-1.497-3.737-1.497z"
}), React.createElement(_reactNativeSvg.Path, {
  d: "M13.425 6.432c1.983.19 3.538.778 3.71 2.528.117 1.276-.438 2.035-1.355 2.463 1.481.359 2.382 1.202 2.196 3.072-.227 2.343-2.035 2.952-4.62 3.08l.004 2.42-1.522.002-.004-2.42c-.389-.005-.819.015-1.25.002l.004 2.42-1.52.001-.004-2.42-3.044-.058.256-1.768s.724.012 1.129.012c.423-.002.549-.293.58-.485l-.008-3.878.012-2.76c-.046-.288-.248-.634-.87-.644.033-.03-1.115.001-1.115.001L6 6.38l3.12-.005-.004-2.37 1.571-.002.004 2.37c.403-.01.8-.003 1.205-.001l-.004-2.37L13.422 4l.003 2.432z"
}), React.createElement(_reactNativeSvg.Path, {
  d: "M10.5 15.637c.991.036 4.506.247 4.49-1.418.016-1.713-3.512-1.483-4.49-1.491v2.909z"
}));

var _default = SvgBitcoin;
exports.default = _default;
//# sourceMappingURL=Bitcoin.js.map