"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgMiner = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  d: "M5.642 18.37a1.224 1.224 0 0 1 0-1.74A8.972 8.972 0 0 1 12 14a8.971 8.971 0 0 1 6.358 2.63 1.224 1.224 0 0 1 0 1.74A8.972 8.972 0 0 1 12 21a8.972 8.972 0 0 1-6.358-2.63z"
}), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M8.5 7.5h7V8h.5c0 2.637-1.681 5-4 5s-4-2.363-4-5h.5v-.5zm.523 1C9.213 10.568 10.566 12 12 12s2.787-1.432 2.977-3.5H9.023z",
  clipRule: "evenodd"
}), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M12 3c2.485 0 4.5 2.239 4.5 5h-9c0-2.761 2.015-5 4.5-5zm0 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-5.5 1A.5.5 0 0 1 7 8h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1-.5-.5z",
  clipRule: "evenodd"
}));

var _default = SvgMiner;
exports.default = _default;
//# sourceMappingURL=Miner.js.map