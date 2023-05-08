import { QRCode, Slider, Space } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const [size, setSize] = React.useState<number>(160);

  return (
    <Space direction="vertical" className="w-full">
      <Slider
        min={60}
        max={300}
        step={10}
        value={size}
        // tooltip={{ open: true }}
        onChange={setSize}
      />

      <QRCode
        value="https://ant.design/"
        icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" // 目前只支持线上地址
        size={size}
        iconSize={size / 4}
      />
    </Space>
  );
};

export default App;
