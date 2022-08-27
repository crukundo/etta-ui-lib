"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgBlock = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M21 8.344a.73.73 0 0 0-.364-.645l-7.494-4.395a2.21 2.21 0 0 0-2.23-.003L3.368 7.698a.73.73 0 0 0-.365.646H3v7.43h.004a.73.73 0 0 0 .376.622l7.563 4.242a2.21 2.21 0 0 0 2.167-.003l7.515-4.24a.73.73 0 0 0 .375-.62v-7.43zm-16.236.564a.375.375 0 0 0-.368.653l6.359 3.588a2.585 2.585 0 0 0 2.551-.006l6.278-3.583a.375.375 0 1 0-.372-.651l-6.278 3.582c-.56.32-1.248.322-1.81.005l-6.36-3.588z",
  clipRule: "evenodd"
}));

var _default = SvgBlock;
exports.default = _default;
//# sourceMappingURL=Block.js.map