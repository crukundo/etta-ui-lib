"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgMining = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  d: "M12.101 2.9a.5.5 0 0 1 .378-.056l3.397.847a.5.5 0 0 1 .37.573c2.365 1.107 4.125 2.93 4.815 4.983a.5.5 0 0 1-.82.52c-1.21-1.16-2.794-2.171-4.642-2.902l-.025.1a.5.5 0 0 1-.606.364l-.485-.12-.907 3.638a.5.5 0 0 1 .364.606l-2.298 9.218a.5.5 0 0 1-.606.364L8.61 20.43a.5.5 0 0 1-.364-.606l2.298-9.218a.5.5 0 0 1 .606-.364l.907-3.638-.485-.121a.5.5 0 0 1-.364-.607l.025-.1c-1.974-.222-3.847-.073-5.46.383a.5.5 0 0 1-.48-.844c1.572-1.488 3.982-2.272 6.59-2.14a.5.5 0 0 1 .218-.274z"
}));

var _default = SvgMining;
exports.default = _default;
//# sourceMappingURL=Mining.js.map