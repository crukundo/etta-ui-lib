"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgFlipVertical = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M7.5 4.25a.75.75 0 0 1 .75.75v12.227l2.227-2.163a.75.75 0 1 1 1.045 1.076l-3.5 3.398a.75.75 0 0 1-1.045 0l-3.5-3.398a.75.75 0 1 1 1.045-1.076l2.228 2.162V5a.75.75 0 0 1 .75-.75zm8.477.212a.75.75 0 0 1 1.045 0l3.5 3.398a.75.75 0 0 1-1.045 1.076L17.25 6.774V19a.75.75 0 0 1-1.5 0V6.774l-2.228 2.162a.75.75 0 0 1-1.045-1.076l3.5-3.398z",
  clipRule: "evenodd"
}));

var _default = SvgFlipVertical;
exports.default = _default;
//# sourceMappingURL=FlipVertical.js.map