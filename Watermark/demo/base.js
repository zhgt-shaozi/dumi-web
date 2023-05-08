import { Result, Watermark } from 'antd';
import React from 'react';
var App = function App() {
  return /*#__PURE__*/React.createElement(Watermark, {
    content: "uid 002324"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 500
    }
  }, /*#__PURE__*/React.createElement(Result, {
    status: "500",
    title: "500",
    subTitle: "Sorry, something went wrong.",
    extra: /*#__PURE__*/React.createElement("span", null, "\u989D\u5916\u5185\u5BB9...")
  })));
};
export default App;