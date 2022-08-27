"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgMixed = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M8.504 15.7c-1.172 1.09-2.594 1.873-4.513 1.85a.75.75 0 0 1 .018-1.5c1.435.018 2.502-.545 3.473-1.449.778-.724 1.451-1.62 2.187-2.6.22-.294.447-.596.684-.903.994-1.288 2.139-2.62 3.69-3.514 1.577-.909 3.515-1.333 6.037-.924a.75.75 0 1 1-.24 1.48c-2.21-.357-3.794.021-5.049.744-1.28.738-2.276 1.867-3.25 3.13-.205.266-.411.54-.62.818-.75 1-1.531 2.043-2.417 2.867z",
  clipRule: "evenodd"
}), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M16.04 3.469a.75.75 0 0 1 1.06.001l3.431 3.44a.75.75 0 0 1 0 1.06l-3.432 3.44a.75.75 0 0 1-1.062-1.06l2.904-2.91-2.903-2.91a.75.75 0 0 1 .001-1.061zm.015 9.185a.75.75 0 0 1 1.06.032l3.39 3.6a.75.75 0 0 1-.03 1.06l-3.391 3.2a.75.75 0 0 1-1.03-1.091l2.846-2.686-2.877-3.055a.75.75 0 0 1 .032-1.06z",
  clipRule: "evenodd"
}), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M7.53 9.396C6.574 8.49 5.496 7.923 4.014 7.95a.75.75 0 0 1-.026-1.5c1.962-.035 3.403.748 4.575 1.856.921.872 1.71 1.983 2.46 3.04.17.24.339.477.506.709.936 1.29 1.876 2.441 3.094 3.2 1.187.74 2.692 1.14 4.822.804a.75.75 0 0 1 .233 1.482c-2.459.387-4.333-.068-5.848-1.013-1.485-.925-2.569-2.287-3.515-3.593-.19-.262-.374-.52-.553-.773-.745-1.048-1.426-2.006-2.23-2.766z",
  clipRule: "evenodd"
}));

var _default = SvgMixed;
exports.default = _default;
//# sourceMappingURL=Mixed.js.map