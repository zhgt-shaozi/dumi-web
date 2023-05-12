import { defineConfig } from 'dumi';
import type { SiteThemeConfig } from 'dumi-theme-antd-style';
import { features } from './config/features';

// antd style 主题配置
const themeConfig: SiteThemeConfig = {
  name: 'Unio',
  logo: 'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',
  apiHeader: {
    pkg: 'dumi-theme-antd-style',
  },
  // 首页配置
  hero: {
    actions: [
      { text: '拓展组件', type: 'primary', link: '/expand-com' },
      {
        text: 'GitHub',
        link: 'https://github.com/zhgtt/dumi-web', // TODO 目前有问题，跳转时会携带当前路由为域名
        openExternal: true, // 是否打开新窗口
      },
    ],
    features,
  },
  // TODO 右上角拓展链接（目前只支持显示 GitHub）
  socialLinks: {
    github: 'https://github.com/zhgtt/dumi-web',
    // zhihu: 'https://xxxx',
    yueque: 'https://www.yuque.com/u12312393/olga7q',
  },
  // footer: false, // 彻底关闭 footer 底部内容
  footerConfig: {
    bottom: 'Made with ❤️ by 蚂蚁集团 - AFX & 数字科技', // 底部内容
    // columns: false, // 关闭底部链接（NOTE 自定义配置参考 https://dumi-theme-antd-style.arvinx.app/config/footer）
  },
};

export default defineConfig({
  themeConfig,
  // themeConfig: {
  //   name: 'Unio',
  //   // logo: '',
  //   // footer: '',
  //   // 右上角拓展链接
  //   socialLinks: {
  //     github: 'https://github.com/zhgtt/dumi-web',
  //     // zhihu: 'https://xxxx',
  //     yuque: 'https://www.yuque.com/u12312393/olga7q',
  //   },
  // },

  favicons: [
    'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',
  ],
  outputPath: 'docs-dist', // 自定义输出路径
  base: process.env.NODE_ENV === 'production' ? '/dumi-web/' : '/', // 基础路径（随环境变化）
  publicPath: process.env.NODE_ENV === 'production' ? '/dumi-web/' : '/', // 静态资源路径
  // apiParser: {}, // 开启 自动 API 表格
  // resolve: {
  //   // 配置入口文件路径，API 解析将从这里开始
  //   entryFile: './src/index.tsx',
  // },
  alias: {
    // 'dumi-web': path.resolve(__dirname, 'src'),
  },
  extraPostCSSPlugins: [require('tailwindcss'), require('autoprefixer')], // 额外的 postcss 配置
  extraBabelPlugins: ['@emotion/babel-plugin'], // 额外的 babel 编译插件
  extraBabelPresets: ['@emotion/babel-preset-css-prop'],
  // chainWebpack: {},
});
