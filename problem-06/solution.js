function sumSquareDifference(n) {
  let sumSquare = 0
  let sumNumbers = 0
  for (let idx = 1; idx <= n; idx++) {
    const powNumber = Math.pow(idx, 2)
    sumNumbers += idx
    sumSquare += powNumber
  }
  return Math.pow(sumNumbers, 2) - sumSquare
}

console.log(sumSquareDifference(10)) // 2640
console.log(sumSquareDifference(20)) // 41230
console.log(sumSquareDifference(100)) // 25164150