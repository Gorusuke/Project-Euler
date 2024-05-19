function countingSundays(firstYear, lastYear) {
  function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }

  const months = {
    1: 31,
    2: (year) => isLeapYear(year) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  }

  let daysInYear = 0
  for (let i = 1900; i < firstYear; i++) {
    daysInYear += !isLeapYear(i) ? 365 : 366
  }

  let firstDay = (daysInYear % 7) + 1
  let firstOfMonth = firstDay
  let sundayDays = 0
  for (let j = firstYear; j <= lastYear; j++) {
    for (let k = 1; k <= 12; k++) {
      if (firstOfMonth % 7 === 0) sundayDays++
      firstOfMonth += typeof months[k] === 'number' ? months[k] : months[k](j)
    }
  }

  return sundayDays;
}

console.log(countingSundays(1943, 1946)) // 6
console.log(countingSundays(1995, 2000)) // 10
console.log(countingSundays(1901, 2000)) // 171
