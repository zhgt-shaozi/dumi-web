/**
 * title: 基础用法
 * description: 通过设置 `content` 自定义水印的内容
 * inherit: true
 */
import { Result, Watermark } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Watermark content="uid 002324">
    <div style={{ height: 500 }}>
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={<span>额外内容...</span>}
      />
    </div>
  </Watermark>
);

export default App;
