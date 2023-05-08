import { message, QRCode, Space } from 'antd';
import React from 'react';
var App = function App() {
  return (
    /*#__PURE__*/
    // <ConfigProvider locale={zhCN}>
    React.createElement(Space, {
      wrap: true
    }, /*#__PURE__*/React.createElement(QRCode, {
      value: "https://ant.design/",
      status: "loading"
    }), /*#__PURE__*/React.createElement(QRCode, {
      value: "https://ant.design/",
      status: "expired",
      onRefresh: function onRefresh() {
        return message.info('点击刷新按钮的回调');
      }
    }))
    // </ConfigProvider>
  );
};

export default App;