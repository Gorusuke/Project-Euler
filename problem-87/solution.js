function primePowerTriples(n) {
  function getSievePrimes(max) {
    const primes = []
    const primesMap = Array(max).fill(true)
    primesMap[0] = false
    primesMap[1] = false

    for (let i = 2; i <= max; i += 2) {
      if (primesMap[i]) {
        primes.push(i)
        for (let j = i * i; j <= max; j = j + i) {
          primesMap[j] = false
        }
      }
      if (i === 2) i = 1
    }
    return primes
  }

  function getPowersSummed(numbers, powers, limit, curSum) {
    if (curSum >= limit) return []
    else if (powers.length === 0) return [curSum]

    const powersSummed = []
    const curPower = powers[0]
    const powersLeft = powers.slice(1)
    for (let i = 0; i < numbers.length; i++) {
      const curNumber = numbers[i]
      const nextSum = curSum + curNumber ** curPower
      if (nextSum >= limit) return powersSummed
      const result = getPowersSummed(numbers, powersLeft, limit, curSum + curNumber ** curPower)
      powersSummed.push(...result)
    }
    return powersSummed
  }

  const maximumBaseNumber = Math.floor(Math.sqrt(n - 2 ** 3 - 2 ** 4)) + 1
  const primes = getSievePrimes(maximumBaseNumber)
  const uniqueSums = new Set(getPowersSummed(primes, [2, 3, 4], n, 0))
  return uniqueSums.size
}

console.log(primePowerTriples(50)) // 4
console.log(primePowerTriples(10035)) // 684
console.log(primePowerTriples(500000)) // 18899
console.log(primePowerTriples(5000000)) // 138932
console.log(primePowerTriples(50000000)) // 1097343
