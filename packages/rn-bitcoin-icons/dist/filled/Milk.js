"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgMilk = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  d: "M14.278 4.977a.946.946 0 0 0-.832-.477h-2.858a.96.96 0 0 0-.861.518c-.13.253-.296.589-.48.982h5.569a21.574 21.574 0 0 0-.538-1.023z"
}), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M7.5 12c0-1.542.66-3.48 1.302-5h6.475c.616 1.43 1.223 3.275 1.223 5v7a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-7zM9 12a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6A.5.5 0 0 0 9 12z",
  clipRule: "evenodd"
}), React.createElement(_reactNativeSvg.Rect, {
  width: 7,
  height: 3,
  x: 8.5,
  y: 3,
  rx: 1
}));

var _default = SvgMilk;
exports.default = _default;
//# sourceMappingURL=Milk.js.map