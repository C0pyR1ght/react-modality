'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var framerMotion = require('framer-motion');
var ReactDOM = require('react-dom');
var Measure = require('react-measure');
var _styled = require('@emotion/styled/base');
var react = require('@emotion/react');
var ScrollLock = require('react-scrolllock');
var CloseIcon = require('react-feather/dist/icons/x');
var reactFixedBottom = require('react-fixed-bottom');
var debounce = require('lodash.debounce');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var Measure__default = /*#__PURE__*/_interopDefaultLegacy(Measure);
var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var ScrollLock__default = /*#__PURE__*/_interopDefaultLegacy(ScrollLock);
var CloseIcon__default = /*#__PURE__*/_interopDefaultLegacy(CloseIcon);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);

var ChildrenProps = PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].func, PropTypes__default['default'].node, PropTypes__default['default'].arrayOf(PropTypes__default['default'].node)]);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _EMOTION_STRINGIFIED_CSS_ERROR__$4() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "iculqz",
  styles: "-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale"
} : {
  name: "cwy04r-Encapsulate",
  styles: "-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;label:Encapsulate;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVuY2Fwc3VsYXRlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmUiLCJmaWxlIjoiRW5jYXBzdWxhdGUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcblxuY29uc3QgRW5jYXBzdWxhdGUgPSAoeyBzdHlsZSwgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdFx0b3ZlcmZsb3c6IFwic2Nyb2xsXCIsXG5cdFx0XHRcdFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiBcInRvdWNoXCIsXG5cdFx0XHRcdGJvcmRlcjogMCxcblx0XHRcdFx0Li4uc3R5bGVcblx0XHRcdH19XG5cdFx0XHR7Li4ucmVzdH1cblx0XHQ+XG5cdFx0XHQ8R2xvYmFsXG5cdFx0XHRcdHN0eWxlcz17Y3NzYFxuXHRcdFx0XHRcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHRcdFx0XHRcdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG5cdFx0XHRcdGB9XG5cdFx0XHQvPlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuRW5jYXBzdWxhdGUucHJvcFR5cGVzID0ge1xuXHRzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuXHRcdFByb3BUeXBlcy5zdHJpbmcsXG5cdFx0UHJvcFR5cGVzLmZ1bmMsXG5cdFx0UHJvcFR5cGVzLm5vZGUsXG5cdFx0UHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpXG5cdF0pLmlzUmVxdWlyZWRcbn07XG5cbkVuY2Fwc3VsYXRlLmRlZmF1bHRQcm9wcyA9IHtcblx0c3R5bGU6IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbmNhcHN1bGF0ZTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$4
};

var Encapsulate = function Encapsulate(_ref2) {
  var style = _ref2.style,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["style", "children"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    style: _objectSpread2({
      display: "block",
      overflow: "scroll",
      WebkitOverflowScrolling: "touch",
      border: 0
    }, style)
  }, rest), /*#__PURE__*/React__default['default'].createElement(react.Global, {
    styles: _ref
  }), children);
};

Encapsulate.propTypes = {
  style: PropTypes__default['default'].object,
  children: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].func, PropTypes__default['default'].node, PropTypes__default['default'].arrayOf(PropTypes__default['default'].node)]).isRequired
};
Encapsulate.defaultProps = {
  style: {}
};

function _EMOTION_STRINGIFIED_CSS_ERROR__$3() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
var Frame = /*#__PURE__*/_styled__default['default'](Encapsulate, process.env.NODE_ENV === "production" ? {
  target: "e1l7d9641"
} : {
  target: "e1l7d9641",
  label: "Frame"
})(process.env.NODE_ENV === "production" ? {
  name: "106rno2",
  styles: "overflow:hidden;position:fixed;left:0;right:0;top:0;bottom:0;z-index:99999999999;width:100vw;height:100vh"
} : {
  name: "106rno2",
  styles: "overflow:hidden;position:fixed;left:0;right:0;top:0;bottom:0;z-index:99999999999;width:100vw;height:100vh",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3dDIiwiZmlsZSI6ImNvbW1vbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCBFbmNhcHN1bGF0ZSBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW1vbi9FbmNhcHN1bGF0ZVwiO1xuXG5leHBvcnQgY29uc3QgRnJhbWUgPSBzdHlsZWQoRW5jYXBzdWxhdGUpYFxuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHR0b3A6IDA7XG5cdGJvdHRvbTogMDtcblx0ei1pbmRleDogOTk5OTk5OTk5OTk7XG5cdHdpZHRoOiAxMDB2dztcblx0aGVpZ2h0OiAxMDB2aDtcbmA7XG5cbmV4cG9ydCBjb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcblx0cG9zaXRpb246IGZpeGVkO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0dG9wOiAwO1xuXHRib3R0b206IDA7XG5cdHotaW5kZXg6IDU7XG5cdG92ZXJmbG93OiBhdXRvO1xuXHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG5cblx0JHtwcm9wcyA9PlxuXHRcdHR5cGVvZiBwcm9wcy5jb250ZW50Rml4QnJlYWtwb2ludCA9PT0gXCJudW1iZXJcIiAmJlxuXHRcdGBAbWVkaWEgKG1pbi13aWR0aDogNDUwcHgpIGFuZCAobWluLWhlaWdodDogJHtgJHtwcm9wcy5jb250ZW50Rml4QnJlYWtwb2ludH1weGB9KSB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudHM6IGNlbnRlcjtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHR9YH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNDUwcHgpIHtcblx0XHRwYWRkaW5nOiAyMHB4O1xuXHR9XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$3
});
var Overlay$1 = _styled__default['default']("div", process.env.NODE_ENV === "production" ? {
  target: "e1l7d9640"
} : {
  target: "e1l7d9640",
  label: "Overlay"
})("position:fixed;left:0;right:0;top:0;bottom:0;z-index:5;overflow:auto;-webkit-overflow-scrolling:touch;", function (props) {
  return typeof props.contentFixBreakpoint === "number" && "@media (min-width: 450px) and (min-height: ".concat("".concat(props.contentFixBreakpoint, "px"), ") {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-contents: center;\n\t\t\t\toverflow: hidden;\n\t\t}");
}, "@media (min-width: 450px){padding:20px;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWlDIiwiZmlsZSI6ImNvbW1vbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCBFbmNhcHN1bGF0ZSBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW1vbi9FbmNhcHN1bGF0ZVwiO1xuXG5leHBvcnQgY29uc3QgRnJhbWUgPSBzdHlsZWQoRW5jYXBzdWxhdGUpYFxuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHR0b3A6IDA7XG5cdGJvdHRvbTogMDtcblx0ei1pbmRleDogOTk5OTk5OTk5OTk7XG5cdHdpZHRoOiAxMDB2dztcblx0aGVpZ2h0OiAxMDB2aDtcbmA7XG5cbmV4cG9ydCBjb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcblx0cG9zaXRpb246IGZpeGVkO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0dG9wOiAwO1xuXHRib3R0b206IDA7XG5cdHotaW5kZXg6IDU7XG5cdG92ZXJmbG93OiBhdXRvO1xuXHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG5cblx0JHtwcm9wcyA9PlxuXHRcdHR5cGVvZiBwcm9wcy5jb250ZW50Rml4QnJlYWtwb2ludCA9PT0gXCJudW1iZXJcIiAmJlxuXHRcdGBAbWVkaWEgKG1pbi13aWR0aDogNDUwcHgpIGFuZCAobWluLWhlaWdodDogJHtgJHtwcm9wcy5jb250ZW50Rml4QnJlYWtwb2ludH1weGB9KSB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudHM6IGNlbnRlcjtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHR9YH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNDUwcHgpIHtcblx0XHRwYWRkaW5nOiAyMHB4O1xuXHR9XG5gO1xuIl19 */"));

var MotionOverlay = framerMotion.motion.custom(Overlay$1);
var Overlay = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement(MotionOverlay, _extends({
    ref: ref,
    variants: {
      hidden: {
        backgroundColor: "rgba(0, 0, 0, 0)",
        pointerEvents: "none"
      },
      visible: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        pointerEvents: "auto"
      }
    },
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    transition: {
      duration: 0.25
    }
  }, props), children);
});
Overlay.propTypes = {
  children: ChildrenProps.isRequired
};

var DialogBase = function DialogBase(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement(Frame, props, /*#__PURE__*/React__default['default'].createElement(ScrollLock__default['default'], null, children));
};

DialogBase.propTypes = {
  children: ChildrenProps.isRequired
};

function _EMOTION_STRINGIFIED_CSS_ERROR__$2() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var Button = _styled__default['default']("button", process.env.NODE_ENV === "production" ? {
  target: "e1q2xf7y0"
} : {
  target: "e1q2xf7y0",
  label: "Button"
})(process.env.NODE_ENV === "production" ? {
  name: "k4dy2e",
  styles: "position:absolute;right:5px;top:5px;height:30px;width:30px;padding:0;display:flex;align-items:center;justify-content:center;border-radius:4px;background-color:rgba(0, 0, 0, 0);color:rgb(120, 120, 120);z-index:100;border:none;outline:0;transition:background-color 0.25s,color 0.25s;&:hover{background-color:rgba(100, 100, 100, 0.1);color:rgb(100, 100, 100);cursor:pointer;}&:active{background-color:rgba(100, 100, 100, 0.15);}&>svg{stroke-width:3px;}"
} : {
  name: "k4dy2e",
  styles: "position:absolute;right:5px;top:5px;height:30px;width:30px;padding:0;display:flex;align-items:center;justify-content:center;border-radius:4px;background-color:rgba(0, 0, 0, 0);color:rgb(120, 120, 120);z-index:100;border:none;outline:0;transition:background-color 0.25s,color 0.25s;&:hover{background-color:rgba(100, 100, 100, 0.1);color:rgb(100, 100, 100);cursor:pointer;}&:active{background-color:rgba(100, 100, 100, 0.15);}&>svg{stroke-width:3px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsb3NlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLNEIiLCJmaWxlIjoiQ2xvc2UuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCJyZWFjdC1mZWF0aGVyL2Rpc3QvaWNvbnMveFwiO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiA1cHg7XG5cdHRvcDogNXB4O1xuXHRoZWlnaHQ6IDMwcHg7XG5cdHdpZHRoOiAzMHB4O1xuXHRwYWRkaW5nOiAwO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuXHRjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xuXHR6LWluZGV4OiAxMDA7XG5cdGJvcmRlcjogbm9uZTtcblx0b3V0bGluZTogMDtcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cywgY29sb3IgMC4yNXM7XG5cblx0Jjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjEpO1xuXHRcdGNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHR9XG5cdCY6YWN0aXZlIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuMTUpO1xuXHR9XG5cdCYgPiBzdmcge1xuXHRcdHN0cm9rZS13aWR0aDogM3B4O1xuXHR9XG5gO1xuXG5jb25zdCBDbG9zZSA9ICh7IG9uQ2xpY2sgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxCdXR0b24gb25DbGljaz17b25DbGlja30+XG5cdFx0XHQ8Q2xvc2VJY29uIHNpemU9ezIyfSAvPlxuXHRcdDwvQnV0dG9uPlxuXHQpO1xufTtcblxuQ2xvc2UucHJvcFR5cGVzID0ge1xuXHRvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbG9zZTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
});

var Close = function Close(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/React__default['default'].createElement(Button, {
    onClick: onClick
  }, /*#__PURE__*/React__default['default'].createElement(CloseIcon__default['default'], {
    size: 22
  }));
};

Close.propTypes = {
  onClick: PropTypes__default['default'].func.isRequired
};

function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var Container$1 = _styled__default['default']("div", process.env.NODE_ENV === "production" ? {
  target: "e1w65gh1"
} : {
  target: "e1w65gh1",
  label: "Container"
})(process.env.NODE_ENV === "production" ? {
  name: "1002hq0",
  styles: "max-width:768px;margin:0 auto;width:100%;min-height:100%;position:relative;background-color:#fff;@media (min-width: 450px){min-height:auto!important;border-radius:10px;overflow:hidden;box-shadow:0 30px 60px -12px rgba(50, 50, 93, 0.25),0 18px 36px -18px rgba(0, 0, 0, 0.3),0 -12px 36px -8px rgba(0, 0, 0, 0.025);}"
} : {
  name: "1002hq0",
  styles: "max-width:768px;margin:0 auto;width:100%;min-height:100%;position:relative;background-color:#fff;@media (min-width: 450px){min-height:auto!important;border-radius:10px;overflow:hidden;box-shadow:0 30px 60px -12px rgba(50, 50, 93, 0.25),0 18px 36px -18px rgba(0, 0, 0, 0.3),0 -12px 36px -8px rgba(0, 0, 0, 0.025);}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFbUMiLCJmaWxlIjoibW9kYWwuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuXHRtYXgtd2lkdGg6IDc2OHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0d2lkdGg6IDEwMCU7XG5cdG1pbi1oZWlnaHQ6IDEwMCU7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNDUwcHgpIHtcblx0XHRtaW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IC0xMnB4IHJnYmEoNTAsIDUwLCA5MywgMC4yNSksXG5cdFx0XHQwIDE4cHggMzZweCAtMThweCByZ2JhKDAsIDAsIDAsIDAuMyksXG5cdFx0XHQwIC0xMnB4IDM2cHggLThweCByZ2JhKDAsIDAsIDAsIDAuMDI1KTtcblx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
});
var Body$1 = _styled__default['default']("div", process.env.NODE_ENV === "production" ? {
  target: "e1w65gh0"
} : {
  target: "e1w65gh0",
  label: "Body"
})(process.env.NODE_ENV === "production" ? {
  name: "cdbqzp",
  styles: "position:relative;display:flex;flex-direction:row;align-items:stretch;justify-content:center"
} : {
  name: "cdbqzp",
  styles: "position:relative;display:flex;flex-direction:row;align-items:stretch;justify-content:center",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQjhCIiwiZmlsZSI6Im1vZGFsLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblx0bWF4LXdpZHRoOiA3NjhweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHdpZHRoOiAxMDAlO1xuXHRtaW4taGVpZ2h0OiAxMDAlO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDQ1MHB4KSB7XG5cdFx0bWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRib3gtc2hhZG93OiAwIDMwcHggNjBweCAtMTJweCByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpLFxuXHRcdFx0MCAxOHB4IDM2cHggLTE4cHggcmdiYSgwLCAwLCAwLCAwLjMpLFxuXHRcdFx0MCAtMTJweCAzNnB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjAyNSk7XG5cdH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
});

var MotionContainer$1 = framerMotion.motion.custom(Container$1);

var Modal = function Modal(_ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      props = _objectWithoutProperties(_ref, ["children", "isOpen", "onClose"]);

  var _useState = React.useState(500),
      _useState2 = _slicedToArray(_useState, 2),
      contentFixBreakpoint = _useState2[0],
      setContentFixBreakpoint = _useState2[1];

  var onSheetResize = function onSheetResize(width, height) {
    setContentFixBreakpoint(height);
  };

  return /*#__PURE__*/ReactDOM__default['default'].createPortal(isOpen && /*#__PURE__*/React__default['default'].createElement(DialogBase, null, /*#__PURE__*/React__default['default'].createElement(Overlay, {
    contentFixBreakpoint: contentFixBreakpoint
  }, /*#__PURE__*/React__default['default'].createElement(Measure__default['default'], {
    bounds: true,
    onResize: function onResize(_ref2) {
      var rect = _ref2.bounds;
      return onSheetResize(rect.width, rect.height);
    }
  }, function (_ref3) {
    var measureRef = _ref3.measureRef;
    return /*#__PURE__*/React__default['default'].createElement(MotionContainer$1, _extends({
      sx: {
        color: "text",
        bg: "background"
      },
      variants: {
        hidden: {
          opacity: 0,
          visibility: "hidden",
          y: 20
        },
        visible: {
          opacity: 1,
          visibility: "visible",
          y: 0
        }
      },
      initial: "hidden",
      animate: "visible",
      exit: "hidden",
      transition: {
        duration: 0.25,
        delay: 0.25
      },
      ref: measureRef
    }, props), /*#__PURE__*/React__default['default'].createElement(Close, {
      onClick: onClose
    }), /*#__PURE__*/React__default['default'].createElement(Body$1, null, /*#__PURE__*/React__default['default'].createElement("slot", {
      name: "dynamic-sheet-content"
    }, children)));
  }))), document.body);
};

Modal.propTypes = {
  children: ChildrenProps.isRequired,
  onClose: PropTypes__default['default'].func.isRequired,
  isOpen: PropTypes__default['default'].bool
};
Modal.defaultProps = {
  isOpen: false
};

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var Container = _styled__default['default']("div", process.env.NODE_ENV === "production" ? {
  target: "epq7fa92"
} : {
  target: "epq7fa92",
  label: "Container"
})(process.env.NODE_ENV === "production" ? {
  name: "1yb6o8h",
  styles: "width:100%;border-radius:20px 20px 0 0;box-shadow:0 30px 60px -12px rgba(50, 50, 93, 0.25),0 18px 36px -18px rgba(0, 0, 0, 0.3),0 -12px 36px -8px rgba(0, 0, 0, 0.025);background:#fff;position:relative;left:0;right:0"
} : {
  name: "1yb6o8h",
  styles: "width:100%;border-radius:20px 20px 0 0;box-shadow:0 30px 60px -12px rgba(50, 50, 93, 0.25),0 18px 36px -18px rgba(0, 0, 0, 0.3),0 -12px 36px -8px rgba(0, 0, 0, 0.025);background:#fff;position:relative;left:0;right:0",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoZWV0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFbUMiLCJmaWxlIjoic2hlZXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuXHR3aWR0aDogMTAwJTtcblx0Ym9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcblx0Ym94LXNoYWRvdzogMCAzMHB4IDYwcHggLTEycHggcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSxcblx0XHQwIDE4cHggMzZweCAtMThweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgLTEycHggMzZweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4wMjUpO1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IC0xMDBweDtcblx0cmlnaHQ6IC0xMDBweDtcblx0dG9wOiAxMDBweDtcblx0Ym90dG9tOiAtOTk5OTk5cHg7XG5cdGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG5cdGJhY2tncm91bmQ6IGluaGVyaXQ7XG5gO1xuXG5leHBvcnQgY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZzogMzBweCAyMHB4IDIwcHg7XG5cdG92ZXJmbG93OiBhdXRvO1xuXHR6LWluZGV4OiA1O1xuXG5cdCY6YmVmb3JlIHtcblx0XHRjb250ZW50OiBcIlwiO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHRvcDogMTBweDtcblx0XHRoZWlnaHQ6IDZweDtcblx0XHR3aWR0aDogNzBweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMjAsIDIyMCk7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0ei1pbmRleDogMTAwO1xuXHRcdGJvcmRlcjogbm9uZTtcblx0XHRvdXRsaW5lOiAwO1xuXHR9XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var Background = _styled__default['default']("div", process.env.NODE_ENV === "production" ? {
  target: "epq7fa91"
} : {
  target: "epq7fa91",
  label: "Background"
})(process.env.NODE_ENV === "production" ? {
  name: "2vsjxx",
  styles: "position:absolute;left:-100px;right:-100px;top:100px;bottom:-999999px;border-radius:inherit;background:inherit"
} : {
  name: "2vsjxx",
  styles: "position:absolute;left:-100px;right:-100px;top:100px;bottom:-999999px;border-radius:inherit;background:inherit",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoZWV0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhb0MiLCJmaWxlIjoic2hlZXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuXHR3aWR0aDogMTAwJTtcblx0Ym9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcblx0Ym94LXNoYWRvdzogMCAzMHB4IDYwcHggLTEycHggcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSxcblx0XHQwIDE4cHggMzZweCAtMThweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgLTEycHggMzZweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4wMjUpO1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IC0xMDBweDtcblx0cmlnaHQ6IC0xMDBweDtcblx0dG9wOiAxMDBweDtcblx0Ym90dG9tOiAtOTk5OTk5cHg7XG5cdGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG5cdGJhY2tncm91bmQ6IGluaGVyaXQ7XG5gO1xuXG5leHBvcnQgY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZzogMzBweCAyMHB4IDIwcHg7XG5cdG92ZXJmbG93OiBhdXRvO1xuXHR6LWluZGV4OiA1O1xuXG5cdCY6YmVmb3JlIHtcblx0XHRjb250ZW50OiBcIlwiO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHRvcDogMTBweDtcblx0XHRoZWlnaHQ6IDZweDtcblx0XHR3aWR0aDogNzBweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMjAsIDIyMCk7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0ei1pbmRleDogMTAwO1xuXHRcdGJvcmRlcjogbm9uZTtcblx0XHRvdXRsaW5lOiAwO1xuXHR9XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var Body = _styled__default['default']("div", process.env.NODE_ENV === "production" ? {
  target: "epq7fa90"
} : {
  target: "epq7fa90",
  label: "Body"
})(process.env.NODE_ENV === "production" ? {
  name: "1m0ft0i",
  styles: "position:relative;padding:30px 20px 20px;overflow:auto;z-index:5;&:before{content:\"\";position:absolute;left:0;right:0;top:10px;height:6px;width:70px;background-color:rgb(220, 220, 220);border-radius:100px;margin:0 auto;z-index:100;border:none;outline:0;}"
} : {
  name: "1m0ft0i",
  styles: "position:relative;padding:30px 20px 20px;overflow:auto;z-index:5;&:before{content:\"\";position:absolute;left:0;right:0;top:10px;height:6px;width:70px;background-color:rgb(220, 220, 220);border-radius:100px;margin:0 auto;z-index:100;border:none;outline:0;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoZWV0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QjhCIiwiZmlsZSI6InNoZWV0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblx0d2lkdGg6IDEwMCU7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG5cdGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IC0xMnB4IHJnYmEoNTAsIDUwLCA5MywgMC4yNSksXG5cdFx0MCAxOHB4IDM2cHggLTE4cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIC0xMnB4IDM2cHggLThweCByZ2JhKDAsIDAsIDAsIDAuMDI1KTtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAtMTAwcHg7XG5cdHJpZ2h0OiAtMTAwcHg7XG5cdHRvcDogMTAwcHg7XG5cdGJvdHRvbTogLTk5OTk5OXB4O1xuXHRib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuXHRiYWNrZ3JvdW5kOiBpbmhlcml0O1xuYDtcblxuZXhwb3J0IGNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmc6IDMwcHggMjBweCAyMHB4O1xuXHRvdmVyZmxvdzogYXV0bztcblx0ei1pbmRleDogNTtcblxuXHQmOmJlZm9yZSB7XG5cdFx0Y29udGVudDogXCJcIjtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHR0b3A6IDEwcHg7XG5cdFx0aGVpZ2h0OiA2cHg7XG5cdFx0d2lkdGg6IDcwcHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwgMjIwLCAyMjApO1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdHotaW5kZXg6IDEwMDtcblx0XHRib3JkZXI6IG5vbmU7XG5cdFx0b3V0bGluZTogMDtcblx0fVxuYDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var MotionContainer = framerMotion.motion.custom(Container); // Variants and sheet behaviour will change based on the size of the body relative to the viewport

var Sheet = function Sheet(_ref) {
  var children = _ref.children,
      onClose = _ref.onClose,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["children", "onClose", "onClick"]);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isExpandable = _useState2[0],
      setExpandable = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isExpanded = _useState4[0],
      setExpanded = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      mounted = _useState6[0],
      setMounted = _useState6[1];

  var controls = framerMotion.useAnimation();
  var bodyRef = React.useRef();
  var variants = {
    hidden: {
      y: "100%"
    },
    visible: {
      y: 0
    }
  };
  var dragConstraints = {
    top: 0
  };

  if (isExpandable) {
    var bodyRect = bodyRef.current.getBoundingClientRect();
    variants = _objectSpread2(_objectSpread2({}, variants), {}, {
      visible: {
        y: bodyRect.height - window.innerHeight / 2
      },
      expand: {
        y: bodyRect.height - (window.innerHeight - 50)
      }
    });
    dragConstraints = {
      top: bodyRect.height - window.innerHeight
    };
  }

  var preventDefaultClick = function preventDefaultClick() {
    var clickHandler = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
    return function (e) {
      // Prevent click from triggering Overlay click.
      e.preventDefault();
      e.stopPropagation();
      return clickHandler(e);
    };
  };

  var onDragEnd = debounce__default['default'](function (event, info) {
    // Requires much less to expand than to close.
    var shouldClose = info.velocity.y > 20 && info.point.y > 0 || info.velocity.y >= 0 && info.point.y > 45;
    var shouldExpand = info.velocity.y <= 0;

    if (shouldExpand && isExpandable) {
      controls.start("expand");
      setExpanded(true);
    } else {
      if (shouldClose && ( // Should be able to close from expanded position if big drag
      isExpanded ? info.velocity.y >= 20 && info.point.y > 100 : true)) {
        controls.start("hidden");
        onClose();
      } else {
        controls.start("visible");
      }

      setExpanded(false);
    }
  }, 250, {
    leading: true,
    trailing: false
  });
  React.useEffect(function () {
    if (mounted) {
      var _bodyRect = bodyRef.current.getBoundingClientRect(); // Is expandable if body in sheet is greater than half the viewport height.


      var isExp = _bodyRect.height > window.innerHeight / 2;
      setExpandable(isExp);

      if (isExp) {
        // Use function as variants change need a rerender
        controls.start(function () {
          return {
            y: _bodyRect.height - window.innerHeight / 2
          };
        });
      }
    } else {
      setMounted(true);
    }
  }, [controls, mounted]);
  return /*#__PURE__*/React__default['default'].createElement(DialogBase, null, /*#__PURE__*/React__default['default'].createElement(Overlay, {
    sx: {
      overflow: "hidden !important"
    },
    onClick: onClose
  }, /*#__PURE__*/React__default['default'].createElement(reactFixedBottom.FixedBottom, null, /*#__PURE__*/React__default['default'].createElement(MotionContainer, _extends({
    sx: {
      color: "text",
      bg: "white"
    },
    drag: "y",
    onDragEnd: onDragEnd,
    dragConstraints: dragConstraints,
    dragPropagation: true,
    variants: variants,
    initial: "hidden",
    animate: controls,
    exit: "hidden",
    transition: {
      type: "spring",
      damping: 40,
      stiffness: 400
    },
    onClick: preventDefaultClick(onClick)
  }, props), /*#__PURE__*/React__default['default'].createElement(Background, {
    onClick: preventDefaultClick()
  }), /*#__PURE__*/React__default['default'].createElement(Body, {
    ref: bodyRef
  }, /*#__PURE__*/React__default['default'].createElement("slot", {
    name: "dynamic-sheet-content"
  }, children))))));
};

var BottomSheet = function BottomSheet(_ref2) {
  var isOpen = _ref2.isOpen,
      props = _objectWithoutProperties(_ref2, ["isOpen"]);

  return /*#__PURE__*/ReactDOM__default['default'].createPortal( /*#__PURE__*/React__default['default'].createElement(framerMotion.AnimatePresence, null, isOpen && /*#__PURE__*/React__default['default'].createElement(Sheet, props)), document.body);
};

Sheet.propTypes = {
  children: ChildrenProps.isRequired,
  onClose: PropTypes__default['default'].func.isRequired,
  onClick: PropTypes__default['default'].func
};
Sheet.defaultProps = {
  onClick: function onClick() {}
};
BottomSheet.propTypes = {
  isOpen: PropTypes__default['default'].bool
};
BottomSheet.defaultProps = {
  isOpen: false
};

var DynamicSheet = function DynamicSheet(_ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      confirmClose = _ref.confirmClose,
      confirmCloseMessage = _ref.confirmCloseMessage;
  var isMobile = window.innerWidth < 450;

  var abort = function abort() {
    if (confirmClose) {
      var confirm = window.confirm(confirmCloseMessage); // eslint-disable-line

      if (!confirm) {
        return false;
      }
    }

    return onClose();
  }; // See: https://stackoverflow.com/questions/3888902/detect-browser-or-tab-closing


  var beforeUnload = function beforeUnload(message) {
    return function (e) {
      (e || window.event).returnValue = message;
      return message;
    };
  };

  React.useEffect(function () {
    var fn = beforeUnload(confirmCloseMessage);

    if (confirmClose) {
      window.onbeforeunload = fn;
      window.addEventListener("beforeunload", fn, false);
    }

    return function () {
      window.onbeforeunload = null;
      window.removeEventListener("beforeunload", fn, false);
    };
  }, [confirmClose, confirmCloseMessage]);

  if (isMobile) {
    return /*#__PURE__*/React__default['default'].createElement(BottomSheet, {
      isOpen: isOpen,
      onClose: abort
    }, children);
  }

  return /*#__PURE__*/React__default['default'].createElement(Modal, {
    isOpen: isOpen,
    onClose: abort
  }, children);
};

DynamicSheet.propTypes = {
  children: ChildrenProps.isRequired,
  isOpen: PropTypes__default['default'].bool,
  onClose: PropTypes__default['default'].func,
  confirmClose: PropTypes__default['default'].bool,
  confirmCloseMessage: PropTypes__default['default'].string
};
DynamicSheet.defaultProps = {
  isOpen: false,
  onClose: function onClose() {},
  confirmClose: false,
  confirmCloseMessage: "Are you sure you would like to abort the checkout?"
};

exports.BottomSheet = BottomSheet;
exports.Modal = Modal;
exports.default = DynamicSheet;
