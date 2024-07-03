function largeNonMersennePrime(multiplier, power) {
  function modStepsResults(number, other, mod, startValue, step) {
    let result = startValue
    for (let i = 0; i < other; i++) {
      result = step(number, result) % mod
    }
    return result
  }

  const numOfDigits = 10
  const mod = 10 ** numOfDigits
  const digitsAfterPower = modStepsResults(2, power, mod, 1, (a, b) => a * b)
  const digitsAfterMultiply = modStepsResults(
    digitsAfterPower,
    multiplier,
    mod,
    0,
    (a, b) => a + b
  )
  const lastDigits = (digitsAfterMultiply + 1) % mod
  return lastDigits.toString().padStart(10, '0')
}

console.log(largeNonMersennePrime(19, 6833086)) // '3637590017'
console.log(largeNonMersennePrime(27, 7046834)) // '0130771969'
console.log(largeNonMersennePrime(6679881, 6679881)) // '4455386113'
console.log(largeNonMersennePrime(28433, 7830457)) // '8739992577'
