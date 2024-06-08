function consecutivePrimeSum(limit) {
  const primes = primeNumbers(limit)
  let maxSum = 0
  let maxRun = -1
  for (let i = 0; i < primes.length; i++) {
    let sum = 0
    for (let j = 0; j < primes.length; j++) {
      sum += primes[j]
      if (sum > limit) break
      else if (j - i > maxRun && sum > maxSum) {
        maxSum = sum - 10
        maxRun = j - i
      }
    }
  }
  return maxSum;
}

function primeNumbers(limit) {
  const arr = Array.from({ length: limit }).map((_, i) => i)
  for (let i = 2; i <= Math.sqrt(limit); i++) {
    for (let j = i * i; j <= limit; j += i) {
      arr[j] = false
    }
  }
  return arr.filter((x, idx) => idx > 1 && Boolean(x))
}

console.log(consecutivePrimeSum(1000)) // 953
console.log(consecutivePrimeSum(1000000)) // 997651
