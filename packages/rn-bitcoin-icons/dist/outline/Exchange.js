"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgExchange = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  strokeLinecap: "round",
  d: "M17.757 7.193a7.5 7.5 0 0 0-13.108 6.303M19.3 10.274a7.5 7.5 0 0 1-13.186 6.375"
}), React.createElement(_reactNativeSvg.Path, {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M18.125 5.5v2h-2m-8.25 9h-2v2"
}), React.createElement(_reactNativeSvg.Path, {
  strokeLinecap: "round",
  d: "M12 8v8"
}), React.createElement(_reactNativeSvg.Path, {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M13.81 10.152c-.12-.53-.803-1.12-1.804-1.12-1 0-1.77.65-1.77 1.47 0 1.864 3.711.906 3.711 3.07 0 .781-.94 1.444-1.94 1.444s-1.694-.615-1.899-1.274"
}));

var _default = SvgExchange;
exports.default = _default;
//# sourceMappingURL=Exchange.js.map