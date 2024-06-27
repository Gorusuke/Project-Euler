function sqrtDigitalExpansion(n) {
  function sumDigits(number) {
    let sum = 0
    while (number > 0n) {
      let digit = number % 10n
      sum += parseInt(digit, 10)
      number = number / 10n
    }
    return sum
  }

  function power(numberA, numberB) {
    let result = 1n
    for (let b = 0; b < numberB; b++) {
      result = result * BigInt(numberA)
    }
    return result
  }

  function expandSquareRoot(number, numDigits) {
    let a = 5n * BigInt(number)
    let b = 5n
    const boundaryWithNeededDigits = power(10, numDigits + 1)

    while (b < boundaryWithNeededDigits) {
      if (a >= b) {
        a = a - b
        b = b + 10n
      } else {
        a = a * 100n
        b = (b / 10n) * 100n + 5n
      }
    }
    return b / 100n
  }

  let result = 0
  let nextPerfectRoot = 1
  const requiredDigits = 100
  for (let i = 1; i <= n; i++) {
    if (nextPerfectRoot ** 2 === i) {
      nextPerfectRoot++
      continue
    }
    result += sumDigits(expandSquareRoot(i, requiredDigits))
  }

  return result
}

console.log(sqrtDigitalExpansion(2)) // 475
console.log(sqrtDigitalExpansion(50)) // 19543
console.log(sqrtDigitalExpansion(100)) // 40886
