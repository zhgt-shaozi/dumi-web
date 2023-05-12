/**
 * title: 不同状态的二维码
 * description: 通过设置 `status` 的值控制二维码的状态
 * inherit: true
 */
import { ConfigProvider, message, QRCode, Space } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import React from 'react';

const App: React.FC = () => (
  <ConfigProvider locale={zhCN}>
    <Space wrap>
      <QRCode value="https://ant.design/" status="loading" />
      <QRCode
        value="https://ant.design/"
        status="expired"
        onRefresh={() => message.info('点击刷新按钮的回调')}
      />
    </Space>
  </ConfigProvider>
);

export default App;
