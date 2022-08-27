"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgQrCode = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M5 5h4.5v4.5H5V5zm1.5 1.5V8H8V6.5H6.5zm8-1.5H19v4.5h-4.5V5zM16 6.5V8h1.5V6.5H16zm-11 8h4.5V19H5v-4.5zM6.5 16v1.5H8V16H6.5z",
  clipRule: "evenodd"
}), React.createElement(_reactNativeSvg.Path, {
  d: "M5 11.25h1.5v1.5H5zm3 0h1.5v1.5H8zm3.167 0h1.5v1.5h-1.5zm0 3.125h1.5v1.5h-1.5zm0 3.125h1.5V19h-1.5zm0-9.375h1.5v1.5h-1.5zm0-3.125h1.5v1.5h-1.5zm3.166 6.25h1.5v1.5h-1.5zm3.167 0H19v1.5h-1.5zm-3.167 3.125h1.5v1.5h-1.5zm3.167 0H19v1.5h-1.5zM14.333 17.5h1.5V19h-1.5zm3.167 0H19V19h-1.5z"
}));

var _default = SvgQrCode;
exports.default = _default;
//# sourceMappingURL=QrCode.js.map