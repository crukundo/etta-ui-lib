"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgSnowflake = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "M12 3.25a.75.75 0 0 1 .75.75v3.175l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.28 3.281v1.954h1.925l3.295-3.295a.75.75 0 1 1 1.06 1.06l-2.234 2.235H20a.75.75 0 0 1 0 1.5h-3.175l2.205 2.205a.75.75 0 1 1-1.06 1.06l-3.266-3.265H12.75v1.925l3.28 3.28a.75.75 0 1 1-1.06 1.06l-2.22-2.219V20a.75.75 0 0 1-1.5 0v-3.204l-2.22 2.22a.75.75 0 0 1-1.06-1.06l3.28-3.281V12.75H9.296L6.03 16.016a.75.75 0 0 1-1.06-1.06l2.205-2.206H4a.75.75 0 0 1 0-1.5h3.204L4.97 9.016a.75.75 0 0 1 1.06-1.06l3.295 3.294h1.925V9.296l-3.28-3.28a.75.75 0 1 1 1.06-1.06l2.22 2.219V4a.75.75 0 0 1 .75-.75z",
  clipRule: "evenodd"
}));

var _default = SvgSnowflake;
exports.default = _default;
//# sourceMappingURL=Snowflake.js.map