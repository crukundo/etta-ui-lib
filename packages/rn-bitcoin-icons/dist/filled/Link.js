"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgLink = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  d: "m7.05 11.293-2.12 2.121a4 4 0 0 0 5.657 5.657l2.828-2.828a4 4 0 0 0 0-5.657l-1.06 1.06a2.5 2.5 0 0 1 0 3.536L9.524 18.01a2.5 2.5 0 0 1-3.535-3.535l2.12-2.121-1.06-1.061z"
}), React.createElement(_reactNativeSvg.Path, {
  d: "m15.889 11.646 2.121-2.12a2.5 2.5 0 0 0-3.535-3.536l-2.829 2.828a2.5 2.5 0 0 0 0 3.536l-1.06 1.06a4 4 0 0 1 0-5.657l2.828-2.828a4 4 0 0 1 5.657 5.657l-2.121 2.121-1.061-1.06z"
}));

var _default = SvgLink;
exports.default = _default;
//# sourceMappingURL=Link.js.map