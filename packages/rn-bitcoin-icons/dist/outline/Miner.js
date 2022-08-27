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
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  d: "M6.413 18.406a1.197 1.197 0 0 1 0-1.812A8.467 8.467 0 0 1 12 14.5c2.139 0 4.093.79 5.587 2.094a1.197 1.197 0 0 1 0 1.812A8.467 8.467 0 0 1 12 20.5a8.468 8.468 0 0 1-5.587-2.094zM8.521 8.5c.194 2.25 1.677 4 3.479 4s3.285-1.75 3.479-4H8.52z"
}), React.createElement(_reactNativeSvg.Path, {
  d: "M16 8c0 .169-.008.336-.024.5H8.024A5.113 5.113 0 0 1 8 8c0-2.485 1.79-4.5 4-4.5s4 2.015 4 4.5zm-4-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
  clipRule: "evenodd"
}), React.createElement(_reactNativeSvg.Path, {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M7 8.5h10"
}));

var _default = SvgMiner;
exports.default = _default;
//# sourceMappingURL=Miner.js.map