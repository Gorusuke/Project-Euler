function pandigitalPrime(n) {
  let max = 0
  for (let i = Math.pow(10, n - 1); i < Math.pow(10, n); i++) {
    if (isPrime(i) && isPandigital(i.toString(), n)) {
      max = Math.max(i, max)
    }
  }
  return max;
}

function isPandigital(str, n) {
  if (str.length !== n) return false
  const stringNumbers = Array.from({ length: n }).map((_, idx) => idx + 1)
  const temp = [...str].sort()
  return stringNumbers.every(x => temp.includes(x.toString()))
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

console.log(pandigitalPrime(4)) // 4231
console.log(pandigitalPrime(7)) // 7652413
