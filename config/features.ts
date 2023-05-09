import { IFeature } from 'dumi-theme-antd-style';

export const features: IFeature[] = [
  {
    title: '现代化主题风格',
    image: '💠', // 可以为一个图标，也可以为一个链接
    description:
      '本主题包采用了流动色、毛玻璃、光影质感、自然动效等现代化的设计表现手法，将界面以更加简约、美观的方式呈现，使得文档更加直观、易读、易用',
    row: 6, // 卡片占据多少行
    // imageType: 'primary',  // 图片主题，分为 default / primary(有明亮和暗黑两种样式) / light
    // hero: true,  // 是否背后显示 hero 的流动色
    // link: '/guide/style', // 添加 link 后，会自动出现 立即了解 的操作
    // openExternal: true  // 是否打开新窗口
  },
  {
    title: '基于 Ant Design 与 CSSinJS',
    description:
      '本主题包底层使用了 antd-style 样式库，在书写样式上更加灵活、可读、易于维护。<quotient>本主题包算是开发 antd-style 时的一个副产物</quotient>',
    imageType: 'light',
    image:
      'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',
    row: 6,
    // link: 'https://dumi-theme-antd-style.arvinx.app/', // TODO 跳转链接有问题
    // openExternal: true,
  },
  {
    title: '只供学习',
    description:
      '本文档为个人网站，只供学习，会基于 react 实现一些常见的组件，比较摆烂',
    image: '🍋',
    imageType: 'primary',
    row: 6,
  },
];
