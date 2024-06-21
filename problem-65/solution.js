function convergentsOfE(n) {
  function sumDigits(num) {
    let sum = 0n
    while (num > 0) {
      sum += num % 10n
      num = num / 10n
    }
    return parseInt(sum)
  }

  let convergents = [[2n, 1n], [3n, 1n]]
  const multipliers = [1n, 1n, 2n]
  for (let i = 2; i < n; i++) {
    const [secondLastConvergent, lastConvergent] = convergents
    const [secondLastNumerator, secondLastDenominator] = secondLastConvergent
    const [lastNumerator, lastDenominator] = lastConvergent
    const curMultiplier = multipliers[i % 3]
    const numerator = secondLastNumerator + curMultiplier * lastNumerator
    const denominator = secondLastDenominator + curMultiplier * lastDenominator
    convergents = [lastConvergent, [numerator, denominator]]
    if (i % 3 === 2) multipliers[2] += 2n
  }
  return sumDigits(convergents[1][0])
}

console.log(convergentsOfE(10)) // 17
console.log(convergentsOfE(30)) // 53
console.log(convergentsOfE(50)) // 91
console.log(convergentsOfE(70)) // 169
console.log(convergentsOfE(100)) // 272
