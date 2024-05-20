function coinSums(n) {
  const coins = [1, 2, 5, 10, 20, 50, 100, 200]
  const ways = Array(n + 1).fill(0)
  ways[0] = 1
  for (let i = 0; i <= coins.length; i++) {
    const coin = coins[i];
    for (let j = coin; j <= n; j++) {
      ways[j] += ways[j - coin]
    }
  }
  return ways[n];
}

console.log(coinSums(50)) // 451
console.log(coinSums(100)) // 4563
console.log(coinSums(150)) // 21873
console.log(coinSums(200)) // 73682
