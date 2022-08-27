"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgGear = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "m17.653 10.35 2.056.336a.347.347 0 0 1 .291.343v1.913a.348.348 0 0 1-.288.342l-2.058.362a5.82 5.82 0 0 1-.49 1.185l1.217 1.69a.35.35 0 0 1-.036.45l-1.353 1.352a.347.347 0 0 1-.445.04l-1.707-1.198c-.376.21-.776.377-1.193.5l-.363 2.048a.347.347 0 0 1-.343.287h-1.913a.347.347 0 0 1-.343-.29l-.34-2.039a5.87 5.87 0 0 1-1.197-.495l-1.694 1.186a.348.348 0 0 1-.446-.038L5.655 16.97a.349.349 0 0 1-.036-.448l1.197-1.674a5.865 5.865 0 0 1-.5-1.204l-2.029-.36A.348.348 0 0 1 4 12.942v-1.913c0-.17.123-.315.29-.343l2.03-.338c.121-.42.289-.822.5-1.203L5.636 7.453a.347.347 0 0 1 .039-.445l1.352-1.352c.12-.12.31-.136.448-.037l1.68 1.2a5.86 5.86 0 0 1 1.196-.491l.333-2.036A.348.348 0 0 1 11.028 4h1.913c.17 0 .314.122.343.288l.359 2.047c.415.121.815.287 1.193.497l1.685-1.211a.348.348 0 0 1 .45.036l1.352 1.352c.12.12.136.308.039.446l-1.2 1.71c.206.376.37.772.49 1.185zM9.565 12a2.435 2.435 0 1 0 4.87 0 2.435 2.435 0 0 0-4.87 0z",
  clipRule: "evenodd"
}));

var _default = SvgGear;
exports.default = _default;
//# sourceMappingURL=Gear.js.map