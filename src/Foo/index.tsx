import React, { type FC } from 'react';

// type PropsType = {
//   /**
//    * @description 属性描述
//    * @default 默认值
//    */
//   title: string;
// };

const Foo: FC<{
  /**
   * @description 属性描述
   * @default 默认值
   */
  title: string;
}> = (props) => <h4 className="w-full">{props.title}</h4>;

export default Foo;
