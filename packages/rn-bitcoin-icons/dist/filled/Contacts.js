"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgContacts = props => React.createElement(_reactNativeSvg.default, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, props), React.createElement(_reactNativeSvg.Path, {
  d: "M15.436 14.778c-.595-.25-1.336-.563-1.336-.803v-1.57A3.549 3.549 0 0 0 15.5 9.6V7.5C15.5 5.57 13.93 4 12 4S8.5 5.57 8.5 7.5v2.1a3.55 3.55 0 0 0 1.4 2.806v1.569c0 .226-.734.54-1.323.792C7.152 15.376 5 16.296 5 18.7v.35h14v-.35c0-2.42-2.144-3.324-3.564-3.922z",
  opacity: 0.25
}), React.createElement(_reactNativeSvg.Path, {
  d: "M8.5 9.5v-2a3.5 3.5 0 1 1 7 0v2c0 1.19-.593 2.24-1.5 2.873v.95a1 1 0 0 0 .629.928l1.586.635A4.431 4.431 0 0 1 19 19H5a4.431 4.431 0 0 1 2.785-4.114l1.586-.635a1 1 0 0 0 .629-.928v-.95A3.496 3.496 0 0 1 8.5 9.5z"
}));

var _default = SvgContacts;
exports.default = _default;
//# sourceMappingURL=Contacts.js.map