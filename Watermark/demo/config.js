function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { Form, Input, InputNumber, Popover, Result, Slider, Space, Watermark } from 'antd';
import React, { useMemo, useState } from 'react';
import { ChromePicker } from 'react-color';
// 颜色选择器组件
var ColorPicker = function ColorPicker(_ref) {
  var value = _ref.value,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(Popover, {
    trigger: "click",
    placement: "bottomLeft"
    // overlayInnerStyle={{ padding: 0 }}
    ,
    content: /*#__PURE__*/React.createElement(ChromePicker, {
      color: value,
      onChange: function onChange(color) {
        return _onChange === null || _onChange === void 0 ? void 0 : _onChange(color.rgb);
      },
      className: "!shadow-none"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid #dedede'
    },
    className: "cursor-pointer bg-white inline-block p-1 rounded-sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(".concat(value === null || value === void 0 ? void 0 : value.r, ", ").concat(value === null || value === void 0 ? void 0 : value.g, ", ").concat(value === null || value === void 0 ? void 0 : value.b, ", ").concat(value === null || value === void 0 ? void 0 : value.a, ")")
    },
    className: "rounded-sm w-9 h-4"
  })));
};
var App = function App() {
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var _useState = useState({
      content: 'uid 002324',
      color: {
        r: 0,
        g: 0,
        b: 0,
        a: 0.15
      },
      fontSize: 16,
      zIndex: 9,
      rotate: -22,
      gap: [100, 100],
      offset: undefined
    }),
    _useState2 = _slicedToArray(_useState, 2),
    config = _useState2[0],
    setConfig = _useState2[1];
  var content = config.content,
    color = config.color,
    fontSize = config.fontSize,
    zIndex = config.zIndex,
    rotate = config.rotate,
    gap = config.gap,
    offset = config.offset;

  // 利用 useMemo，依赖于 config 进行数据的变更，当 config 发生改变时，watermarkProps 也会发生改变
  var watermarkProps = useMemo(function () {
    return {
      content: content,
      font: {
        color: "rgba(".concat(color.r, ",").concat(color.g, ",").concat(color.b, ",").concat(color.a, ")"),
        fontSize: fontSize
      },
      zIndex: zIndex,
      rotate: rotate,
      gap: gap,
      offset: offset
    };
  }, [config]);
  return /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement(Watermark, _extends({}, watermarkProps, {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Result, {
    title: "Your operation has been executed"
  }), /*#__PURE__*/React.createElement("img", {
    className: "relative w-full",
    src: "https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ",
    alt: "\u793A\u4F8B\u56FE\u7247"
  })), /*#__PURE__*/React.createElement(Form, {
    className: "pl-5 ml-5",
    style: {
      width: 280,
      flexShrink: 0,
      borderLeft: '1px solid #eee'
    },
    form: form,
    layout: "vertical",
    initialValues: config,
    onValuesChange: function onValuesChange(_, values) {
      setConfig(values);
    }
  }, /*#__PURE__*/React.createElement(Form.Item, {
    name: "content",
    label: "Content \u6587\u5B57\u5185\u5BB9"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u8BF7\u8F93\u5165"
  })), /*#__PURE__*/React.createElement(Form.Item, {
    name: "color",
    label: "Color \u6587\u5B57\u989C\u8272"
  }, /*#__PURE__*/React.createElement(ColorPicker, null)), /*#__PURE__*/React.createElement(Form.Item, {
    name: "fontSize",
    label: "FontSize \u6587\u5B57\u5927\u5C0F"
  }, /*#__PURE__*/React.createElement(Slider, {
    step: 1,
    min: 0,
    max: 100
  })), /*#__PURE__*/React.createElement(Form.Item, {
    name: "zIndex",
    label: "zIndex \u5806\u53E0\u987A\u5E8F"
  }, /*#__PURE__*/React.createElement(Slider, {
    step: 1,
    min: 0,
    max: 15
  })), /*#__PURE__*/React.createElement(Form.Item, {
    name: "rotate",
    label: "Rotate \u6587\u5B57\u65CB\u8F6C\u89D2\u5EA6"
  }, /*#__PURE__*/React.createElement(Slider, {
    step: 1,
    min: -180,
    max: 180
  })), /*#__PURE__*/React.createElement(Form.Item, {
    label: "Gap \u6C34\u5370\u95F4\u8DDD",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement(Space, {
    align: "baseline"
  }, /*#__PURE__*/React.createElement(Form.Item, {
    name: ['gap', 0]
  }, /*#__PURE__*/React.createElement(InputNumber, {
    placeholder: "gapX",
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement(Form.Item, {
    name: ['gap', 1]
  }, /*#__PURE__*/React.createElement(InputNumber, {
    placeholder: "gapY",
    style: {
      width: '100%'
    }
  })))), /*#__PURE__*/React.createElement(Form.Item, {
    label: "Offset \u6C34\u5370\u8DDD\u79BB\u5DE6\u4E0A\u89D2\u7684\u504F\u79FB\u91CF",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement(Space, {
    align: "baseline"
  }, /*#__PURE__*/React.createElement(Form.Item, {
    name: ['offset', 0]
  }, /*#__PURE__*/React.createElement(InputNumber, {
    placeholder: "offsetLeft",
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement(Form.Item, {
    name: ['offset', 1]
  }, /*#__PURE__*/React.createElement(InputNumber, {
    placeholder: "offsetTop",
    style: {
      width: '100%'
    }
  }))))));
};
export default App;