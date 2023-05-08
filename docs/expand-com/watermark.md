---
group:
  title: ant design 组件
  order: 0
demo:
  cols: 1
  tocDepth: 3
toc: content
order: 1
---

# Watermark 水印

:::info{title=写在前面}
antd 中的 `Watermark` 水印组件，支持文字和图片显示，适用于版权标识，该文章是对 `Watermark` 组件的学习和使用做一个记录；
:::

## 参考资料

- <a href="https://ant.design/components/watermark-cn" target="_blank">antd 官方文档 - Watermark</a>

## 代码示例

<code src="@/Watermark/demo/base.tsx" title="基础用法" description="通过 `content` 自定义水印的内容"></code>
<code src="@/Watermark/demo/content.tsx" title="多行文本水印" description="将 `content` 写成数组的形式，添加多行文本"></code>
<code src="@/Watermark/demo/image.tsx" title="图片水印" description="通过 `image` 添加图片水印，但是需要设置 `width` 和 `height` 属性"></code>
<code src="@/Watermark/demo/config.tsx" title="水印配置项" description="对水印的大小、颜色、间距等进行自定义配置"></code>
