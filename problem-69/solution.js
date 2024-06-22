function totientMaximum(limit) {
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

  const MAX_PRIME = 50;
  const primes = getSievePrimes(MAX_PRIME)
  let result = 1

  for (let i = 0; result * primes[i] < limit; i++) {
    result *= primes[i]
  }
  return result
}

console.log(totientMaximum(10)) // 6
console.log(totientMaximum(10000)) // 2310
console.log(totientMaximum(500000)) // 30030
console.log(totientMaximum(1000000)) // 510510
