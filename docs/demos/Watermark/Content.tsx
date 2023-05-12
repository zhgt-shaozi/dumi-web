/**
 * title: 多行文本水印
 * description: 将 `content` 写成数组的形式，添加多行文本
 * inherit: true
 */
import { Result, Watermark } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Watermark content={['uid 002324', 'Happy Life 😑']}>
    <div style={{ height: 500 }}>
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<span>额外内容...</span>}
      />
    </div>
  </Watermark>
);

export default App;
