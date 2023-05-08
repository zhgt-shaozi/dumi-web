import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/',
  // apiParser: {}, // 开启 自动 API 表格
  // resolve: {
  //   // 配置入口文件路径，API 解析将从这里开始
  //   entryFile: './src/index.tsx',
  // },
  extraPostCSSPlugins: [require('tailwindcss'), require('autoprefixer')], // 额外的 postcss 配置
  alias: {
    // "@": resolvePath
  },
  extraBabelPlugins: ['@emotion/babel-plugin'], // 额外的 babel 编译插件
  extraBabelPresets: ['@emotion/babel-preset-css-prop'],
  // chainWebpack: {},
  themeConfig: {
    name: 'Unio',
    // logo: '',
    // footer: '',
    // 右上角拓展链接
    socialLinks: {
      github: 'https://github.com/umijs/dumi',
      // zhihu: 'https://xxxx',
      yuque: 'https://www.yuque.com/u12312393/olga7q',
    },
  },
});
