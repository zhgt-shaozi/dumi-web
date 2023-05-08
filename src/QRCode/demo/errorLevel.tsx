import type { QRCodeProps } from 'antd';
import { QRCode, Segmented, Space } from 'antd';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [level, setLevel] = useState<string | number>('L');

  return (
    <Space direction="vertical">
      <QRCode
        errorLevel={level as QRCodeProps['errorLevel']}
        value="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
      <Segmented
        options={['L', 'M', 'Q', 'H']}
        value={level}
        onChange={setLevel}
      />
    </Space>
  );
};

export default App;
