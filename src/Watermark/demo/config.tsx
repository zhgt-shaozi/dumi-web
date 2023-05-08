import {
  Form,
  Input,
  InputNumber,
  Popover,
  Result,
  Slider,
  Space,
  Watermark,
} from 'antd';
import React, { useMemo, useState } from 'react';
import { ChromePicker, type RGBColor } from 'react-color';

interface ColorPickerProps {
  value?: RGBColor;
  onChange?: (value: RGBColor) => void;
}

// 颜色选择器组件
const ColorPicker: React.FC<ColorPickerProps> = ({ value, onChange }) => {
  return (
    <Popover
      trigger="click"
      placement="bottomLeft"
      // overlayInnerStyle={{ padding: 0 }}
      content={
        <ChromePicker
          color={value}
          onChange={(color) => onChange?.(color.rgb)}
          className="!shadow-none"
        />
      }
    >
      <div
        style={{ border: '1px solid #dedede' }}
        className="cursor-pointer bg-white inline-block p-1 rounded-sm"
      >
        <div
          style={{
            background: `rgba(${value?.r}, ${value?.g}, ${value?.b}, ${value?.a})`,
          }}
          className="rounded-sm w-9 h-4"
        />
      </div>
    </Popover>
  );
};

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [config, setConfig] = useState({
    content: 'uid 002324',
    color: { r: 0, g: 0, b: 0, a: 0.15 },
    fontSize: 16,
    zIndex: 9,
    rotate: -22,
    gap: [100, 100] as [number, number],
    offset: undefined,
  });
  const { content, color, fontSize, zIndex, rotate, gap, offset } = config;

  // 利用 useMemo，依赖于 config 进行数据的变更，当 config 发生改变时，watermarkProps 也会发生改变
  const watermarkProps = useMemo(
    () => ({
      content,
      font: {
        color: `rgba(${color.r},${color.g},${color.b},${color.a})`,
        fontSize,
      },
      zIndex,
      rotate,
      gap,
      offset,
    }),
    [config],
  );

  return (
    <div className="flex">
      <Watermark {...watermarkProps} style={{ flex: 1 }}>
        <Result title="Your operation has been executed" />
        <img
          className="relative w-full"
          src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ"
          alt="示例图片"
        />
      </Watermark>

      <Form
        className="pl-5 ml-5"
        style={{ width: 280, flexShrink: 0, borderLeft: '1px solid #eee' }}
        form={form}
        layout="vertical"
        initialValues={config}
        onValuesChange={(_, values) => {
          setConfig(values);
        }}
      >
        <Form.Item name="content" label="Content 文字内容">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item name="color" label="Color 文字颜色">
          <ColorPicker />
        </Form.Item>
        <Form.Item name="fontSize" label="FontSize 文字大小">
          <Slider step={1} min={0} max={100} />
        </Form.Item>
        <Form.Item name="zIndex" label="zIndex 堆叠顺序">
          <Slider step={1} min={0} max={15} />
        </Form.Item>
        <Form.Item name="rotate" label="Rotate 文字旋转角度">
          <Slider step={1} min={-180} max={180} />
        </Form.Item>
        <Form.Item label="Gap 水印间距" style={{ marginBottom: 0 }}>
          <Space align="baseline">
            <Form.Item name={['gap', 0]}>
              <InputNumber placeholder="gapX" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name={['gap', 1]}>
              <InputNumber placeholder="gapY" style={{ width: '100%' }} />
            </Form.Item>
          </Space>
        </Form.Item>
        <Form.Item
          label="Offset 水印距离左上角的偏移量"
          style={{ marginBottom: 0 }}
        >
          <Space align="baseline">
            <Form.Item name={['offset', 0]}>
              <InputNumber placeholder="offsetLeft" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name={['offset', 1]}>
              <InputNumber placeholder="offsetTop" style={{ width: '100%' }} />
            </Form.Item>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
