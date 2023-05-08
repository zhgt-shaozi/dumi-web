import { Result, Watermark } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Watermark
    height={30}
    width={130}
    image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original"
  >
    <div style={{ height: 500 }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<span>额外内容...</span>}
      />
    </div>
  </Watermark>
);

export default App;
