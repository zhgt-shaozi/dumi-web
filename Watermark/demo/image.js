import { Result, Watermark } from 'antd';
import React from 'react';
var App = function App() {
  return /*#__PURE__*/React.createElement(Watermark, {
    height: 30,
    width: 130,
    image: "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 500
    }
  }, /*#__PURE__*/React.createElement(Result, {
    status: "404",
    title: "404",
    subTitle: "Sorry, the page you visited does not exist.",
    extra: /*#__PURE__*/React.createElement("span", null, "\u989D\u5916\u5185\u5BB9...")
  })));
};
export default App;