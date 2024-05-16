function primeSummation(n) {
  const primeNumbers = (limit) => {
    const arr = Array.from({ length: limit }).map((_, i) => i)
    for (let i = 2; i <= Math.sqrt(limit); i++) {
      for (let j = i * i; j <= limit; j += i) {
        arr[j] = false
      }
    }
    return arr.filter((x, idx) => idx > 1 && Boolean(x))
  }
  const primeNumbersArr = primeNumbers(n)
  return primeNumbersArr.reduce((a, b) => a + b, 0)
}

console.log(primeSummation(17)) // 41.
console.log(primeSummation(2001)) // 277050.
console.log(primeSummation(140759)) // 873608362.
console.log(primeSummation(2000000)) // 142913828922.