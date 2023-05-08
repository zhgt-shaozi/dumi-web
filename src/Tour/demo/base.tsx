import { EllipsisOutlined } from '@ant-design/icons';
import type { TourProps } from 'antd';
import { Button, Divider, Space, Tour } from 'antd';
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
      // 卡片中添加图片 / 视频
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
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
    <>
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
    </>
  );
};

export default App;
