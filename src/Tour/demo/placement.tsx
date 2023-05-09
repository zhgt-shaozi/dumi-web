import type { TourProps } from 'antd';
import { Button, ConfigProvider, Tour } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import React, { useRef, useState } from 'react';

const App: React.FC = () => {
  const ref1 = useRef(null);

  const [open, setOpen] = useState<boolean>(false);

  // console.log('dom:', document.querySelector('a[data-dumi-tooltip="语雀"]'));

  const steps: TourProps['steps'] = [
    {
      title: 'Unio',
      description:
        '个人的学习网站，以 react + antd 为基础，实现一些常见的组件 🍉',
      // 卡片中添加图片 / 视频
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => document.querySelector('.dumi-default-logo') as HTMLElement,
      placement: 'bottomRight', // 更改卡片位置
    },
    {
      title: '当前组件',
      description: 'Tour 引导组件示例',
      target: () => ref1.current,
    },
    {
      title: '全局搜索',
      description: '在这里可以对项目文档进行全局搜索 🎈',
      target: () =>
        document.querySelector('.dumi-default-search-bar') as HTMLElement,
      placement: 'bottomLeft',
    },
    {
      title: '我的链接',
      description: '个人的语雀文档链接 👉',
      target: () =>
        document.querySelector('a[data-dumi-tooltip="语雀"]') as HTMLElement,
    },
  ];

  return (
    <ConfigProvider locale={zhCN}>
      <Button type="primary" onClick={() => setOpen(true)} ref={ref1}>
        项目引导 - 全局
      </Button>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </ConfigProvider>
  );
};

export default App;
