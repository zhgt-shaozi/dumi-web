import { QRCode, Space, theme } from 'antd';
import React from 'react';
import { TwitterPicker, type ColorResult } from 'react-color';

const { useToken } = theme;

const App: React.FC = () => {
  const { token } = useToken(); // 获取 antd 的主题色
  //   console.log('token: ', token);
  const [color, setColor] = React.useState(token.colorSuccessText);

  const handleChangeComplete = (value: ColorResult) => {
    console.log('value: ', value);
    setColor(value.hex);
  };

  return (
    <Space direction="vertical" size={16}>
      <TwitterPicker
        color={color}
        triangle="hide"
        onChangeComplete={handleChangeComplete}
      />
      <QRCode
        value="https://ant.design/"
        color={color}
        style={{ backgroundColor: token.colorBgLayout }}
      />
    </Space>
  );
};

export default App;
