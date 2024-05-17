function powerDigitSum(exponent) {
  const result = BigInt(Math.pow(2, exponent))
  let sum = 0

  for (let idx = 0; idx < result.toString().length; idx++) {
    const number = result.toString()[idx]
    sum += Number(number)
  }
  return sum
}

console.log(powerDigitSum(15)) // 26
console.log(powerDigitSum(128)) // 166
console.log(powerDigitSum(1000)) // 1366