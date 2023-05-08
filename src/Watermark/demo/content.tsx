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
