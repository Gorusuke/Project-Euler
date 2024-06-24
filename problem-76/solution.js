function countingSummations(n) {
  const combinations = Array(n + 1).fill(0)
  combinations[0] = 1

  for (let i = 1; i < n; i++) {
    for (let j = i; j < n + 1; j++) {
      combinations[j] += combinations[j - i]
    }
  }
  return combinations[n]
}

console.log(countingSummations(5)) // 6
console.log(countingSummations(20)) // 626
console.log(countingSummations(50)) // 204225
console.log(countingSummations(100)) // 190569291
