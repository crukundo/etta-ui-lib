"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgSharedWallet = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M5 4.5A1.5 1.5 0 0 1 6.5 3h8A1.5 1.5 0 0 1 16 4.5v4.504h-1V4.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5H11v1H6.5A1.5 1.5 0 0 1 5 16.5v-12z",
  clipRule: "evenodd"
}), React.createElement(_reactNativeSvg.Path, {
  d: "M6 15h5v2H6z"
}), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M12 11.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-8zm1.5-.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-4z",
  clipRule: "evenodd"
}), React.createElement(_reactNativeSvg.Path, {
  d: "M12.5 18.5h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1z"
}));

var _default = SvgSharedWallet;
exports.default = _default;
//# sourceMappingURL=SharedWallet.js.map