"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgExchange = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  d: "M19.013 10.15a.546.546 0 0 0-.145.493 7 7 0 0 1-12.036 6.08.528.528 0 0 0-.76-.033.475.475 0 0 0-.026.654 8 8 0 0 0 13.788-6.971c-.079-.383-.545-.498-.821-.222zm-1.224-2.989a.475.475 0 0 0 .018-.664A8 8 0 0 0 4.192 13.75c.084.378.546.489.82.215.13-.13.18-.32.142-.5A7 7 0 0 1 17.038 7.14a.528.528 0 0 0 .75.021z"
}), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M18.125 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 1 1 0-1h1.5V5.5a.5.5 0 0 1 .5-.5zM5.521 16.146A.5.5 0 0 1 5.875 16h2a.5.5 0 0 1 0 1h-1.5v1.5a.5.5 0 1 1-1 0v-2a.5.5 0 0 1 .146-.354z",
  clipRule: "evenodd"
}), React.createElement(_reactNativeSvg.Path, {
  d: "M12.224 12.334v1.941c.662-.074 1.138-.457 1.138-1.006 0-.558-.525-.766-1.116-.93l-.022-.005zm-1.433-1.679c0 .555.57.785.985.902V9.741c-.602.08-.985.44-.985.914z"
}), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm.224-1.5h-.448v-.61c-1.075-.07-1.731-.672-1.794-1.534h.7c.05.563.52.859 1.094.919v-2.07l-.219-.063c-.875-.251-1.422-.7-1.422-1.454 0-.86.703-1.455 1.64-1.55V8.5h.45v.629c.99.066 1.69.673 1.716 1.471h-.656c-.06-.498-.481-.81-1.06-.867v1.944l.218.06c.58.154 1.575.493 1.575 1.543 0 .853-.645 1.531-1.794 1.61v.61z",
  clipRule: "evenodd"
}));

var _default = SvgExchange;
exports.default = _default;
//# sourceMappingURL=Exchange.js.map