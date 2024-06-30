function squareDigitChains(limit) {
  function getCombinations(neededDigits, curDigits) {
    if (neededDigits === curDigits.length) return [curDigits]
    const combinations = []
    const lastDigit = curDigits.length !== 0 ? curDigits[0] : 9
    for (let i = 0; i <= lastDigit; i++) {
      const results = getCombinations(neededDigits, [i].concat(curDigits))
      combinations.push(...results)
    }
    return combinations
  }

  function getPossibleSums(limit) {
    const digitsCount = getDigits(limit).length - 1
    const possibleSquaredSums = [false]
    for (let i = 1; i <= 81 * digitsCount; i++) {
      let curVal = i
      while (curVal !== 1 && curVal !== 89) {
        curVal = addSquaredDigits(curVal)
      }
      possibleSquaredSums[i] = curVal === 89
    }
    return possibleSquaredSums
  }

  function addSquaredDigits(num) {
    const digits = getDigits(num)
    let result = 0
    for (let i = 0; i < digits.length; i++) {
      result += digits[i] ** 2
    }
    return result
  }

  function getDigits(number) {
    const digits = []
    while (number > 0) {
      digits.push(number % 10)
      number = Math.floor(number / 10)
    }
    return digits
  }

  function getFactorials(number) {
    const factorials = [1]
    for (let i = 1; i < number; i++) {
      factorials[i] = factorials[i - 1] * i
    }
    return factorials
  }

  const neededDigits = getDigits(limit).length - 1
  const combinations = getCombinations(neededDigits, [])
  const possibleSquaredDigitsSums = getPossibleSums(limit)
  const factorials = getFactorials(neededDigits + 1)

  let endingWith89 = 0

  for (let i = 0; i < combinations.length; i++) {
    let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let digits = combinations[i]
    let curSum = 0
    for (let j = 0; j < digits.length; j++) {
      const curDigit = digits[j]
      curSum += curDigit ** 2
      counts[curDigit]++
    }

    if (possibleSquaredDigitsSums[curSum]) {
      let denominator = 1
      for (let j = 0; j < counts.length; j++) {
        denominator = denominator * factorials[counts[j]]
      }
      endingWith89 += Math.floor(factorials[factorials.length - 1] / denominator)
    }
  }
  return endingWith89
}

console.log(squareDigitChains(100)) // 80
console.log(squareDigitChains(1000)) // 857
console.log(squareDigitChains(100000)) // 85623
console.log(squareDigitChains(10000000)) // 8581146
