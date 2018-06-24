function _getMonthDays(year, month){
  return new Date(year, month + 1, 0).getDate();
}

function _getWeekday(year, month, day){
  return new Date(year, month, day).getDay() + 1;
}

function formatDate (date = new Date()) {
  if (!date instanceof Date) {
    return date;
  }
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return [year, month, day]
}

const weekTable = ['一', '二', '三', '四', '五', '六', '日'];

function getMonthDaysArray(year, month, day) {
  month--;
  let dayArrays = [];
  let days = _getMonthDays(year, month), preDays = _getMonthDays(year, month - 1);
  let thisMonthFirstDayInWeek = _getWeekday(year, month, 1), 
      thisMonthLastDayInWeek = _getWeekday(year, month, days);

  //上月在当月日历面板中的排列
  for (let i = 0; i < thisMonthFirstDayInWeek; i++) {
      dayArrays.push({
          dayNum: (preDays - thisMonthFirstDayInWeek + i + 1),
          weekDay: weekTable[i]
      })
  }
  //当月日历面板中的排列
  for (let i = 1; i <= days; i++) {
      let weekDayFlag = (thisMonthFirstDayInWeek + i - 1) % 7
      dayArrays.push({
          dayNum: i,
          weekDay: weekTable[weekDayFlag],
          selected: i === +day,
          isThisMonth: true
      })
  };
  //下月在当月日历面板中的排列
  for (var i = 1; i <= (6 - thisMonthLastDayInWeek); i++) {
      var weekDayFlag = (thisMonthFirstDayInWeek + days + i - 1) % 7
      dayArrays.push({
          dayNum: i,
          weekDay: weekTable[weekDayFlag]
      })
  };
  return dayArrays;
}

export { formatDate, getMonthDaysArray, weekTable }