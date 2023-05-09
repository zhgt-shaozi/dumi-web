import { EllipsisOutlined } from '@ant-design/icons';
import type { TourProps } from 'antd';
import { Button, ConfigProvider, Divider, Space, Tour } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import React, { useRef, useState } from 'react';

const App: React.FC = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const [open, setOpen] = useState<boolean>(false);

  const steps: TourProps['steps'] = [
    {
      title: '上传文件', // 卡片标题
      description: '在这里上传你的文件', // 卡片描述
      target: () => ref1.current, // 引导卡片指向的 Dom 元素
    },
    {
      title: '保存',
      description: '保存你的内容',
      target: () => ref2.current,
    },
    {
      title: '其他操作',
      description: '点击这里查看其他操作按钮',
      target: () => ref3.current,
    },
  ];

  return (
    <ConfigProvider locale={zhCN}>
      <Button type="primary" onClick={() => setOpen(true)}>
        开始引导
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}>Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </ConfigProvider>
  );
};

export default App;
