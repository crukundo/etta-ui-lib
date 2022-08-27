"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgMagicWand = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  fillRule: "evenodd",
  d: "m7.999 20 7-7.003a2.822 2.822 0 0 0-3.99-3.993l-7.007 6.997a2.827 2.827 0 1 0 3.997 4zM11 11l2 2 1-1a1.414 1.414 0 1 0-2-2l-1 1z",
  clipRule: "evenodd"
}), React.createElement(_reactNativeSvg.Path, {
  d: "M6.759 4.897c.066-.247.416-.247.482 0L7.6 6.225a.25.25 0 0 0 .176.176l1.328.358c.247.066.247.416 0 .482L7.775 7.6a.25.25 0 0 0-.176.176L7.24 9.103c-.066.247-.416.247-.482 0L6.4 7.775a.25.25 0 0 0-.176-.176l-1.329-.358c-.246-.066-.246-.416 0-.482l1.33-.359a.25.25 0 0 0 .176-.176l.358-1.328zm10-1c.066-.247.416-.247.482 0l.358 1.328a.25.25 0 0 0 .176.176l1.328.358c.247.066.247.416 0 .482l-1.328.358a.25.25 0 0 0-.176.176l-.358 1.328c-.066.247-.416.247-.482 0L16.4 6.775a.25.25 0 0 0-.177-.176l-1.328-.358c-.246-.066-.246-.416 0-.482l1.328-.358a.25.25 0 0 0 .177-.176l.358-1.328zm1 9c.066-.247.416-.247.482 0l.358 1.328a.25.25 0 0 0 .176.176l1.328.358c.247.066.247.416 0 .482l-1.328.358a.25.25 0 0 0-.176.176l-.358 1.328c-.066.247-.416.247-.482 0l-.358-1.328a.25.25 0 0 0-.177-.176l-1.328-.358c-.246-.066-.246-.416 0-.482l1.328-.358a.25.25 0 0 0 .177-.176l.358-1.328z"
}));

var _default = SvgMagicWand;
exports.default = _default;
//# sourceMappingURL=MagicWand.js.map