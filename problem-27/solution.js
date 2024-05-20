function quadraticPrimes(range) {
  let bestNum = 0
  let bestA = 0
  let bestB = 0
  for (let a = -1000; a <= range; a++) {
    for (let b = -1000; b <= range; b++) {
      const num = numberOfConsecutivePrimesGenerated(a, b)
      if (num > bestNum) {
        bestNum = num
        bestA = a
        bestB = b
      }
    }
  }

  return bestA * bestB;
}

function numberOfConsecutivePrimesGenerated(a, b) {
  for (let i = 0; ; i++) {
    const n = (i * i) + (i * a) + b
    if (n < 0 || !isPrime(n)) return i
  }
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

console.log(quadraticPrimes(200)) // -4925
console.log(quadraticPrimes(500)) // -18901
console.log(quadraticPrimes(800)) // -43835
console.log(quadraticPrimes(1000)) // -59231
