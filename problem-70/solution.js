function totientPermutation(limit) {
  function getSievePrimes(max) {
    const primesMap = new Array(max).fill(true)
    primesMap[0] = false
    primesMap[1] = false
    const primes = []
    for (let i = 2; i < max; i = i + 2) {
      if (primesMap[i]) {
        primes.push(i)
        for (let j = i * i; j < max; j = j + i) {
          primesMap[j] = false
        }
      }
      if (i === 2) i = 1
    }
    return primes
  }

  function sortDigits(number) {
    return number.toString().split('').sort().join('')
  }

  function isPermutation(numberA, numberB) {
    return sortDigits(numberA) === sortDigits(numberB)
  }

  const MAX_PRIME = 4000
  const primes = getSievePrimes(MAX_PRIME)

  let nValue = 1
  let minRatio = Infinity

  for (let i = 1; i < primes.length; i++) {
    for (let j = i + 1; j < primes.length; j++) {
      const num = primes[i] * primes[j]
      if (num > limit) break
      const phi = (primes[i] - 1) * (primes[j] - 1)
      const ratio = num / phi
      if (minRatio > ratio && isPermutation(num, phi)) {
        nValue = num
        minRatio = ratio
      }
    }
  }
  return nValue
}

console.log(totientPermutation(10000)) // 4435
console.log(totientPermutation(100000)) // 75841
console.log(totientPermutation(500000)) // 474883
console.log(totientPermutation(10000000)) // 8319823
