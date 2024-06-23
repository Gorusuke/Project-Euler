function orderedFractions(limit) {
  const fractions = []
  const fractionValues = {}
  const highBoundary = 3 / 7
  let lowBoundary = 2 / 7

  for (let denominator = limit; denominator > 2; denominator--) {
    let numerator = Math.floor((3 * denominator - 1) / 7)
    let value = numerator / denominator
    if (value > highBoundary || value < lowBoundary) continue
    fractionValues[value] = [numerator, denominator]
    fractions.push(value)
    lowBoundary = value
  }

  fractions.sort()
  return fractionValues[fractions[fractions.length - 1]][0]
}

console.log(orderedFractions(8)) // 2
console.log(orderedFractions(10)) // 2
console.log(orderedFractions(9994)) // 4283
console.log(orderedFractions(500000)) // 214283
console.log(orderedFractions(1000000)) // 428570
