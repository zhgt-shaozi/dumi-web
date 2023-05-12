/** NOTE solarLunar 部分方法
 * @solar 公历、阳历
 * @lunar 农历、阴历
 *
 * 方法
 * @solar2lunar 公历 -> 农历，会返回相应的节气，属年等信息
 * @lunar2solar 农历 -> 公历
 *
 * 返回数据
 * @dayCn 农历日期
 * @monthCn 农历月份
 * @isTerm 是否有节气
 * @term 节气
 * @isLeap 是否为闰月
 * @lunarFestival 农历节日（只有国内传统节日）
 * @festival 公历节日（只有国内节日）
 * @animal 生肖
 * @isToday 是否为今天
 * @gzYear 年的农历叫法（干支）
 * @gzMonth 月的农历叫法（干支）
 * @gzDay 日的农历叫法(干支)
 */

export interface Solar2lunar {
  monthCn?: string;
  animal?: string;
  dayCn?: string;
  festival?: string;
  gzDay?: string;
  gzMonth?: string;
  gzYear?: string;
  isLeap?: boolean;
  isTerm?: boolean;
  isToday?: boolean;
  lunarFestival?: string;
  ncWeek?: string;
  term?: string;
  yearCn?: string;
}
