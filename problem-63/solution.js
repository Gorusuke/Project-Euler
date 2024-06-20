function powerfulDigitCounts(n) {
  function countDigits(num) {
    let counter = 0
    while (num > 0) {
      num = Math.floor(num / 10)
      counter++
    }
    return counter
  }

  let numbersCount = 0
  let curNum = 1
  while (curNum < 10) {
    let power = n
    if (power === countDigits(curNum ** power)) numbersCount++
    curNum++
  }
  return numbersCount
}

console.log(powerfulDigitCounts(1)) // 9
console.log(powerfulDigitCounts(2)) // 6
console.log(powerfulDigitCounts(3)) // 5
console.log(powerfulDigitCounts(4)) // 4
console.log(powerfulDigitCounts(5)) // 3
console.log(powerfulDigitCounts(6)) // 3
console.log(powerfulDigitCounts(7)) // 2
console.log(powerfulDigitCounts(8)) // 2
console.log(powerfulDigitCounts(10)) // 2
console.log(powerfulDigitCounts(21)) // 1
