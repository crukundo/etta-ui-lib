"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgProxy = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M12 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 1 1-1.5 0V7a.75.75 0 0 1 .75-.75zM6.065 8.399a.75.75 0 0 1 1.06.02l2.953 3.06c.28.29.28.751 0 1.042l-2.953 3.06a.75.75 0 1 1-1.08-1.04l1.728-1.79H4a.75.75 0 1 1 0-1.5h3.773L6.046 9.458a.75.75 0 0 1 .019-1.06zm10.461 0a.75.75 0 0 1 1.06.02l2.954 3.06c.28.29.28.751 0 1.042l-2.953 3.06a.75.75 0 1 1-1.08-1.04l1.727-1.79-3.772-.001a.75.75 0 0 1 0-1.5h3.773l-1.728-1.79a.75.75 0 0 1 .02-1.061z",
  clipRule: "evenodd"
}));

var _default = SvgProxy;
exports.default = _default;
//# sourceMappingURL=Proxy.js.map