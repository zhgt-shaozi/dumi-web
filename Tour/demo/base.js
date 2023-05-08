function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
import React, { useRef, useState } from 'react';
var App = function App() {
  var ref1 = useRef(null);
  var ref2 = useRef(null);
  var ref3 = useRef(null);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var steps = [{
    title: '上传文件',
    // 卡片标题
    description: '在这里上传你的文件',
    // 卡片描述
    // 卡片中添加图片 / 视频
    cover: /*#__PURE__*/React.createElement("img", {
      alt: "tour.png",
      src: "https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
    }),
    target: function target() {
      return ref1.current;
    } // 引导卡片指向的 Dom 元素
  }, {
    title: '保存',
    description: '保存你的内容',
    target: function target() {
      return ref2.current;
    }
  }, {
    title: '其他操作',
    description: '点击这里查看其他操作按钮',
    target: function target() {
      return ref3.current;
    }
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "\u5F00\u59CB\u5F15\u5BFC"), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(Button, {
    ref: ref1
  }, "Upload"), /*#__PURE__*/React.createElement(Button, {
    ref: ref2,
    type: "primary"
  }, "Save"), /*#__PURE__*/React.createElement(Button, {
    ref: ref3,
    icon: /*#__PURE__*/React.createElement(EllipsisOutlined, null)
  })), /*#__PURE__*/React.createElement(Tour, {
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    steps: steps
  }));
};
export default App;