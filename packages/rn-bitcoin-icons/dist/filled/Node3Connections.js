"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgNode3Connections = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  d: "M12.54 7.165c.5-.162.901-.543 1.091-1.03l4.233 4.234a1.76 1.76 0 0 0-1.03 1.092L12.54 7.165zm4.295 5.375-4.296 4.295c.5.162.902.543 1.092 1.03l4.233-4.234a1.755 1.755 0 0 1-1.03-1.092zm-5.375 4.295-4.295-4.296c-.162.5-.542.902-1.03 1.092l4.234 4.233c.19-.487.591-.867 1.092-1.03zm0-9.67-4.295 4.296a1.755 1.755 0 0 0-1.03-1.092l4.234-4.233c.19.487.591.867 1.092 1.03z"
}), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M12 4.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2.5 1a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z",
  clipRule: "evenodd"
}), React.createElement(_reactNativeSvg.Circle, {
  cx: 12,
  cy: 18.5,
  r: 2.5
}), React.createElement(_reactNativeSvg.Circle, {
  cx: 5.5,
  cy: 12,
  r: 2.5
}), React.createElement(_reactNativeSvg.Circle, {
  cx: 18.5,
  cy: 12,
  r: 2.5
}));

var _default = SvgNode3Connections;
exports.default = _default;
//# sourceMappingURL=Node3Connections.js.map