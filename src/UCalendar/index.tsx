import { css } from '@emotion/react';
import type { CalendarProps } from 'antd';
import { Calendar, theme } from 'antd';
import dayjs, { type Dayjs } from 'dayjs';
import type { CellRenderInfo } from 'rc-picker/lib/interface';
import React, { useLayoutEffect, useRef, useState } from 'react';

import { getLunarDay } from './utils';

/** NOTE 显示日期 Render，顺序为 农历节日 > 公历节日 > 节气 > 农历月份 > 农历日期
 * 1. 农历月份的样式上会有下划线，字体颜色不会变
 * 2. 如果是初一，显示为当前农历月份
 * 3. 中国的节假日
 * 3. 所有的 date 参数都是 dayjs() 格式
 */

interface PropsType extends CalendarProps<Dayjs> {
  isShowHoliday?: boolean;
  isShowLunarDay?: boolean;
}

// const renderDay = () => {

// }

const UCalendar: React.FC<PropsType> = (props) => {
  const { ...restProps } = props;

  const { token } = theme.useToken();
  console.log('token: ', token);

  const calendarRef = useRef(null);

  const [curDate, setCurDate] = useState(dayjs()); // 选中的日期
  const [curPanelDate, setCurPanelDate] = useState(dayjs()); // 当前面板日期
  const [mode, setMode] = useState<'year' | 'month'>('month'); // 面板类型

  // NOTE 处理日历面板中的非当前月的日期，用 css 控制其显隐（需异步操作）
  useLayoutEffect(() => {
    if (!calendarRef && !curPanelDate) return;

    const dom: HTMLElement | null = calendarRef.current;

    setTimeout(() => {
      // 获取所有 td 并遍历
      const tdList = dom!.querySelectorAll('.ant-picker-content>tbody>tr>td') as NodeListOf<HTMLElement>;
      tdList.forEach((item) => {
        const isCurMonth = dayjs(item.title).format('MM') === curPanelDate.format('MM');
        // TODO 将 index 为 35 之前的 td 中的 value 和 content 做显隐（fullscreen 全屏模式，卡片模式需要另写）
        const value = item.querySelector('.ant-picker-calendar-date-value') as HTMLElement;
        const content = item.querySelector('.ant-picker-calendar-date-content') as HTMLElement;

        value.style.visibility = isCurMonth ? 'visible' : 'hidden';
        content.style.visibility = isCurMonth ? 'visible' : 'hidden';
      });

      // 获取最后一行 tr，如果其第一个 td 非当前月，直接将 tr 隐藏
      const trLastRow = dom!.querySelector('.ant-picker-content>tbody>tr:last-child') as HTMLElement;
      const tdLatsList = Array.from(trLastRow!.children) as HTMLElement[]; // 转换成真正的数组
      const isCurMonth = dayjs(tdLatsList?.[0]?.title).format('MM') === curPanelDate.format('MM');
      trLastRow.style.display = isCurMonth ? 'contents' : 'none';
    }, 10);
  }, [calendarRef, curPanelDate]);

  // NOTE 自定义日期单元格（只渲染当前月的日期）
  const dateCellRender = (value: Dayjs) => {
    // console.log('value: ', value);
    const isCurMonth = value.format('MM') === curDate.format('MM'); // 判断是否为当前月

    const { dayCn, isJuniorOne, isTerm } = getLunarDay(value);

    const isCheck = curDate.isSame(value, 'date'); // 是否为选中的日期

    if (!isCurMonth) return null;
    return (
      <>
        <div className={'text-right'}>
          <span
            className="text-xs"
            css={css`
              ${isTerm && `color: ${token.blue5};`}
              ${isCheck && `color: ${token.colorPrimary};`}
            `}
          >
            {dayCn}
          </span>
          {isJuniorOne && (
            <span
              className="w-4 h-px block"
              css={css`
                background-color: ${token.colorPrimary};
              `}
            />
          )}
        </div>
        <div></div>
      </>
    );
  };

  // 自定义单元格
  const cellRender = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
    // console.log('info: ', info);
    if (info.type === 'date') return dateCellRender(current);
    // if (info.type === 'month') return monthCellRender(current);
    return;
  };

  // 面板改变的回调
  const onPanelChange = (value: Dayjs, mode: 'year' | 'month') => {
    console.log('mode: ', mode);
    setMode(mode);
    setCurDate(value);
    setCurPanelDate(value);
  };

  // 不可选择的日期
  const disabledDate = (value: Dayjs) => {
    const isCurMonth = value.format('MM') === curDate.format('MM'); // 判断是否为当前月
    if (!isCurMonth) return true;
    return false;
  };

  return (
    <div ref={calendarRef}>
      <Calendar
        {...restProps}
        mode={mode}
        value={curDate}
        onChange={setCurDate}
        cellRender={cellRender}
        disabledDate={mode === 'month' ? disabledDate : () => false}
        onPanelChange={onPanelChange}
      />
    </div>
  );
};

export default UCalendar;
