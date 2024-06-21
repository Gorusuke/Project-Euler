function diophantineEquation(n) {
  function isSolution(D, numerator, denominator) {
    return numerator * numerator - BigInt(D) * denominator * denominator === 1n
  }

  let result = 0
  let biggestX = 0

  for (let D = 2; D <= n; D++) {
    let boundary = Math.floor(Math.sqrt(D))
    if (boundary ** 2 === D) continue

    let m = 0n
    let d = 1n
    let a = BigInt(boundary)
    let [numerator, prevNumerator] = [a, 1n]
    let [denominator, prevDenominator] = [1n, 0n]
    while (!isSolution(D, numerator, denominator)) {
      m = d * a - m
      d = (BigInt(D) - m * m) / d
      a = (BigInt(boundary) + m) / d;
      [numerator, prevNumerator] = [a * numerator + prevNumerator, numerator];
      [denominator, prevDenominator] = [a * denominator + prevDenominator, denominator];
    }

    if (numerator > biggestX) {
      biggestX = numerator
      result = D
    }
  }
  return result
}

console.log(diophantineEquation(7)) // 5
console.log(diophantineEquation(100)) // 61
console.log(diophantineEquation(409)) // 409
console.log(diophantineEquation(500)) // 421
console.log(diophantineEquation(1000)) // 661
