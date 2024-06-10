const NUM_PRIMES = 1000000
const PRIME_SEIVE = Array(Math.floor((NUM_PRIMES - 1) / 2)).fill(true)

function initPrimes(num) {
  const upper = Math.floor((num - 1) / 2)
  const sqrtUpper = Math.floor((Math.sqrt(num) - 1) / 2)
  for (let i = 0; i <= sqrtUpper; i++) {
    if (PRIME_SEIVE[i]) {
      const prime = 2 * i + 3
      const primeSqaredIndex = (2 * Math.pow(i, 2)) + (6 * i) + 3
      for (let j = primeSqaredIndex; j < upper; j += prime) {
        PRIME_SEIVE[j] = false;
      }
    }
  }
}

initPrimes(NUM_PRIMES);

function isPrime(num) {
  if (num === 2) return true
  else if (num % 2 === 0) return false
  else return PRIME_SEIVE[(num - 3) / 2]
}

function primeDigitReplacements(n) {
  function isNFamily(number, n) {
    const prime = number.toString()
    const lastDigit = prime[prime.length - 1]
    return doesReplacingMakeFamily(prime, '0', n) ||
      doesReplacingMakeFamily(prime, '2', n) ||
      (lastDigit !== '1' && doesReplacingMakeFamily(prime, '1', n))
  }

  function doesReplacingMakeFamily(prime, digitToReplace, family) {
    let miss = 0;
    const base = parseInt(
      prime
        .split('')
        .map(digit => digit == digitToReplace ? '0' : digit)
        .join('')
    )
    const replacements = parseInt(
      prime
        .split('')
        .map(digit => digit === digitToReplace ? '1' : '0')
        .join('')
    )
    const start = prime[0] === digitToReplace ? 1 : 0
    for (let i = start; i < 10; i++) {
      const nextNumber = base + i * replacements
      if (!isPartOfFamily(nextNumber, prime)) miss++
      if (10 - start - miss < family) break
    }
    return 10 - start - miss === family
  }

  function isPartOfFamily(number, prime) {
    return (
      isPrime(number) && number.toString().length === prime.length
    );
  }

  for (let number = 1; number < 125000; number++) {
    if (isPrime(number) && isNFamily(number, n)) return number
  }
  return -1
}

console.log(primeDigitReplacements(6)) // 13
console.log(primeDigitReplacements(7)) // 56003
console.log(primeDigitReplacements(8)) // 121313
