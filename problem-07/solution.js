function nthPrime(n) {
  const primeNumbers = (limit) => {
    const arr = Array.from({ length: limit }).map((_, i) => i)
    for (let i = 2; i <= Math.sqrt(limit); i++) {
      for (let j = i * i; j <= limit; j += i) {
        arr[j] = false
      }
    }
    return arr.filter((x, idx) => idx > 1 && Boolean(x))
  }

  return primeNumbers(Math.pow(11, 5)).find((_, idx) => idx + 1 === n)
}

console.log(nthPrime(6)) // 13
console.log(nthPrime(10)) // 39
console.log(nthPrime(100)) // 541
console.log(nthPrime(1000)) // 7919
console.log(nthPrime(10001)) // 104743