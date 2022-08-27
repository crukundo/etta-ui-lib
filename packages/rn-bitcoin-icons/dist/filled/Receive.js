"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgReceive = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M5 14.997a.75.75 0 0 1 .75.75V18c0 .138.112.25.25.25h12a.25.25 0 0 0 .25-.25v-2.253a.75.75 0 0 1 1.5 0V18A1.75 1.75 0 0 1 18 19.75H6A1.75 1.75 0 0 1 4.25 18v-2.253a.75.75 0 0 1 .75-.75zM12.202 4.25a.75.75 0 0 1 .75.75v8.086a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75z",
  clipRule: "evenodd"
}), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M8.322 10.626a.75.75 0 0 1 1.06-.013l2.82 2.755 2.82-2.755a.75.75 0 1 1 1.048 1.073l-3.344 3.267a.75.75 0 0 1-1.048 0l-3.344-3.267a.75.75 0 0 1-.012-1.06z",
  clipRule: "evenodd"
}));

var _default = SvgReceive;
exports.default = _default;
//# sourceMappingURL=Receive.js.map