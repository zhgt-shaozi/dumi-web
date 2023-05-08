---
group:
  title: ant design 组件
  order: 0
demo:
  cols: 2
  tocDepth: 3
toc: content
order: 0
---

# QRCode 二维码

:::info{title=写在前面}
antd 中的 `QRCode` 二维码组件，支持打开一个网址或一段文本，并且有多个容错级别，该文章是对 `QRCode` 组件的学习和使用做一个记录；
:::

## 参考资料

- <a href="https://ant.design/components/qrcode-cn" target="_blank">antd 官方文档 - QRCode</a>

## 代码示例

<code src="@/QRCode/demo/base.tsx" title="基础用法" description="通过 `value` 让二维码显示自定义的内容或连接"></code>
<code src="@/QRCode/demo/size.tsx" title="自定义二维码的大小" description="通过 `size` 自定义二维码的大小"></code>
<code src="@/QRCode/demo/errorLevel.tsx" title="二维码的容错级别" description="通过设置 `errorLevel` 调整不同的容错等级"></code>
<code src="@/QRCode/demo/status.tsx" title="不同状态的二维码" description="通过设置 `status` 的值控制二维码的状态"></code>
<code src="@/QRCode/demo/color.tsx" title="自定义二维码的颜色" description="通过设置 `color` 自定义二维码的颜色，通过设置 `style` 自定义背景颜色"></code>

<!-- <API id="Foo"></API> -->
