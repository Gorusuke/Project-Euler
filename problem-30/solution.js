function digitnPowers(n) {
  const minNumber = Number('2' + '0'.repeat(n - 2))
  const maxNumber = Number('9'.repeat(n + 1))
  let results = []
  for (let i = minNumber; i < maxNumber; i++) {
    const numberToString = i.toString()
    let sum = 0
    for (let j = 0; j < numberToString.length; j++) {
      const number = numberToString[j]
      const result = Math.pow(Number(number), n)
      sum += result
    }

    if (sum === i) results.push(i)
  }
  return results.reduce((a, b) => a + b, 0)
}


console.log(digitnPowers(2)) // 0
console.log(digitnPowers(3)) // 1301
console.log(digitnPowers(4)) // 19316
console.log(digitnPowers(5)) // 443839
