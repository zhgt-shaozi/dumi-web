/**
 * title: 基础用法
 * description: 通过 `value` 让二维码显示自定义的内容或连接
 * inherit: true
 */
import { Input, QRCode, Space } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const [text, setText] = React.useState('https://ant.design/');

  return (
    <Space direction="vertical">
      <QRCode value={text || '-'} />
      <Input placeholder="-" maxLength={60} value={text} onChange={(e) => setText(e.target.value)} />
    </Space>
  );
};

export default App;
