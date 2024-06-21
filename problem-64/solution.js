function oddPeriodSqrts(n) {
  function getPeriod(num) {
    let period = 0
    let m = 0
    let d = 1
    let a = Math.floor(Math.sqrt(num))
    const a0 = a
    while (2 * a0 !== a) {
      m = d * a - m
      d = Math.floor((num - m ** 2) / d)
      a = Math.floor((Math.sqrt(num) + m) / d)
      period++
    }
    return period
  }

  let counter = 0
  for (let i = 2; i <= n; i++) {
    if (!Number.isInteger(Math.sqrt(i))) {
      if (getPeriod(i) % 2 !== 0) counter++
    }
  }
  return counter
}

console.log(oddPeriodSqrts(500)) // 83
console.log(oddPeriodSqrts(1000)) // 152
console.log(oddPeriodSqrts(5000)) // 690
console.log(oddPeriodSqrts(10000)) // 1322

