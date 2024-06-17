function spiralPrimes(percent) {
  let lastElement = 9
  let plusValue = 4
  let numPrime = 3
  for (let n = 6; numPrime / (n - 1) >= percent / 100; n += 4) {
    for (let iN = n; iN < n + 3; iN++) {
      lastElement += plusValue
      if (isPrime(lastElement)) numPrime++
    }
    lastElement += plusValue
    plusValue += 2
  }
  return Math.sqrt(lastElement)
}

function isPrime(n) {
  if (n < 2) return false
  else if (n === 2) return true
  else {
    if (n % 2 === 0) return false
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false
    }
    return true
  }
}

console.log(spiralPrimes(50)) // 11
console.log(spiralPrimes(15)) // 981
console.log(spiralPrimes(10)) // 26241
