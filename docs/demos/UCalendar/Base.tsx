/**
 * title: 基础用法
 * description: 农历显示
 * inherit: true
 */
import { Segmented } from 'antd';
import React, { useState } from 'react';
// import zhCN from 'antd/locale/zh_CN';

import { UCalendar } from 'dumi-web';

const App: React.FC = () => {
  const [mode, setMode] = useState(1);

  return (
    <>
      {/* <ConfigProvider locale={zhCN}> */}
      <Segmented
        options={[
          { label: '全屏模式', value: 1 },
          { label: '卡片模式', value: 0 },
        ]}
        value={mode}
        onChange={(val) => setMode(val as number)}
      />

      <UCalendar fullscreen={!!mode} />
      {/* </ConfigProvider> */}
    </>
  );
};

export default App;
