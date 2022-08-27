"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgTransfer = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M4 15.243a.75.75 0 0 1 .75.75V19c0 .138.112.25.25.25h14a.25.25 0 0 0 .25-.25v-3.007a.75.75 0 0 1 1.5 0V19A1.75 1.75 0 0 1 19 20.75H5A1.75 1.75 0 0 1 3.25 19v-3.007a.75.75 0 0 1 .75-.75z",
  clipRule: "evenodd"
}), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M19.87 10.893c.3.286.311.76.025 1.06l-3.047 3.199a.75.75 0 0 1-1.086 0l-3.048-3.198a.75.75 0 1 1 1.086-1.035l2.505 2.628 2.504-2.628a.75.75 0 0 1 1.06-.026z",
  clipRule: "evenodd"
}), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M11.352 4.75A4.202 4.202 0 0 0 7.15 8.952v5.006a.75.75 0 0 1-1.5 0V8.952a5.702 5.702 0 0 1 11.405 0v5.006a.75.75 0 0 1-1.5 0V8.952a4.202 4.202 0 0 0-4.203-4.202z",
  clipRule: "evenodd"
}));

var _default = SvgTransfer;
exports.default = _default;
//# sourceMappingURL=Transfer.js.map