import { type Dayjs } from 'dayjs';
import solarLunar from 'solarlunar-es'; // 农历 / 公历 互转
import type { Solar2lunar } from './types';
// import { LUNAR_HOLIDAY, REST_DAY, SOLAR_HOLIDAY } from '../../utils/constants';

// Method 获取某天为周几（周日为 0，改为 7）
// const getWeekDay = (date: Dayjs) => {
//   return date.day() || 7;
// };

// Method 获取特殊节日（母亲节 / 父亲节）
// const getSpecialDay = (type, { year }) => {
//   const firstDayInMay = dayjs(`${year}-05-01`);
//   const firstDayInJun = dayjs(`${year}-06-01`);

//   let days = null;

//   switch (type) {
//     case 'mothersDay':
//       days = firstDayInMay
//         .add(2, 'week')
//         .subtract(getWeekDay(firstDayInMay), 'day'); // 以 5月1日 为基数获取其第二周，再减去 weekDay，即为 母亲节
//       break;

//     case 'fathersDay':
//       days = firstDayInJun
//         .add(3, 'week')
//         .subtract(getWeekDay(firstDayInJun), 'day'); // 以 6月1日 为基数获取其第三周，再减去 weekDay，即为 父亲节
//       break;

//     default:
//       break;
//   }

//   return days.format(getDayRender'MM-DD');
// };

// 获取每天的农历日期
export const getLunarDay = (date: Dayjs) => {
  //   const { isCurMonth, isCheck, isToday } = options;

  const year = date.year(); // 年份
  const month = date.month() + 1; // 月份
  const day = date.date(); // 日期
  //   const formatDate = date.format('MM-DD');
  //   const enMonth = date.format('MMM'); // 获取英文月份

  // 公历 -> 农历
  const lunarDate = solarLunar.solar2lunar(year, month, day) as Solar2lunar;
  // console.log('lunarDate: ', lunarDate);
  let { monthCn, dayCn, isTerm, term } = lunarDate;

  //   // 获取农历节日
  //   const { name: lunarHoliday } =
  //     LUNAR_HOLIDAY.find((item) => item.date === `${monthCn}${dayCn}`) || {};

  //   // 获取公历节日
  //   let { name: solarHoliday } =
  //     SOLAR_HOLIDAY[enMonth].find((item) => item.date === formatDate) || {};

  //   // 获取特殊节日 - 母亲节 / 父亲节
  //   if (
  //     isCurMonth &&
  //     enMonth === 'May' &&
  //     formatDate === getSpecialDay('mothersDay', { year })
  //   ) {
  //     solarHoliday = '母亲节';
  //   }
  //   if (
  //     isCurMonth &&
  //     enMonth === 'Jun' &&
  //     formatDate === getSpecialDay('fathersDay', { year })
  //   ) {
  //     solarHoliday = '父亲节';
  //   }

  // 判断是否为初一
  const isJuniorOne = dayCn === '初一';

  // NOTE 既有节气，又是初一，优先展示节气
  if (isJuniorOne) dayCn = monthCn;
  if (isTerm) dayCn = term;

  //   // 判断是否为休息日 / 工作日
  //   const { holiday = [], weekday = [] } = REST_DAY[year] || {};
  //   const isRestDay = holiday.includes(formatDate);
  //   const isWeekDay = weekday.includes(formatDate);

  return {
    ...lunarDate,
    dayCn,
    // solarHoliday,
    // lunarHoliday,
    // isRestDay,
    // isWeekDay,
    isJuniorOne,
  };
};

// 获取每天的节假日、节气
// export const get
