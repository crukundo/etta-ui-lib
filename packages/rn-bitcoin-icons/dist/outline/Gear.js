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
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  d: "m17.3 10.453 1.927.315a.326.326 0 0 1 .273.322v1.793a.326.326 0 0 1-.27.321l-1.93.339c-.111.387-.265.76-.459 1.111l1.141 1.584a.326.326 0 0 1-.034.422l-1.268 1.268a.326.326 0 0 1-.418.037l-1.6-1.123a5.482 5.482 0 0 1-1.118.468l-.34 1.921a.326.326 0 0 1-.322.269H11.09a.325.325 0 0 1-.321-.272l-.319-1.911a5.5 5.5 0 0 1-1.123-.465l-1.588 1.113a.326.326 0 0 1-.418-.037L6.052 16.66a.327.327 0 0 1-.035-.42l1.123-1.57a5.497 5.497 0 0 1-.47-1.129l-1.901-.337a.326.326 0 0 1-.269-.321V11.09c0-.16.115-.296.273-.322l1.901-.317c.115-.393.272-.77.47-1.128l-1.11-1.586a.326.326 0 0 1 .037-.417L7.34 6.052a.326.326 0 0 1 .42-.034l1.575 1.125a5.46 5.46 0 0 1 1.121-.46l.312-1.91a.326.326 0 0 1 .322-.273h1.793c.159 0 .294.114.322.27l.336 1.92c.389.112.764.268 1.12.465l1.578-1.135a.326.326 0 0 1 .422.033l1.268 1.268a.326.326 0 0 1 .036.418L16.84 9.342c.193.352.348.724.46 1.11zM9.716 12a2.283 2.283 0 1 0 4.566 0 2.283 2.283 0 0 0-4.566 0z",
  clipRule: "evenodd"
}));

var _default = SvgGear;
exports.default = _default;
//# sourceMappingURL=Gear.js.map