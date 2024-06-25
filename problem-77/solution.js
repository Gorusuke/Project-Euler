function primeSummations(n) {
  function getSievePrimes(max) {
    const primesMap = new Array(max).fill(true)
    primesMap[0] = false
    primesMap[1] = false
    const primes = []

    for (let i = 2; i < max; i += 2) {
      if (primesMap[i]) {
        primes.push(i)
        for (let j = i * i; j < max; j += i) {
          primesMap[j] = false
        }
      }
      if (i === 2) i = 1
    }
    return primes
  }

  const MAX_NUMBER = 100
  const primes = getSievePrimes(MAX_NUMBER)

  for (let curNumber = 2; curNumber < MAX_NUMBER; curNumber++) {
    const combinations = Array(curNumber + 1).fill(0)
    combinations[0] = 1
    for (let i = 0; i < primes.length; i++) {
      for (let j = primes[i]; j <= curNumber; j++) {
        combinations[j] += combinations[j - primes[i]]
      }
    }
    if (combinations[curNumber] > n) return curNumber
  }
}

console.log(primeSummations(5)) // 11
console.log(primeSummations(100)) // 31
console.log(primeSummations(1000)) // 53
console.log(primeSummations(5000)) // 71
