function coinPartitions(divisor) {
  const partitions = [1]
  let n = 0

  while (partitions[n] !== 0) {
    n++
    partitions.push(0)
    let i = 0
    let pentagonal = 1

    while (pentagonal <= n) {
      const sign = i % 4 > 1 ? -1 : 1
      partitions[n] += sign * partitions[n - pentagonal]
      partitions[n] = partitions[n] % divisor
      i++
      let k = Math.floor(i / 2) + 1
      if (i % 2 !== 0) k *= -1
      pentagonal = Math.floor((k * (3 * k - 1)) / 2)
    }
  }
  return n
}

console.log(coinPartitions(7)) // 5
console.log(coinPartitions(10000)) // 599
console.log(coinPartitions(100000)) // 11224
console.log(coinPartitions(1000000)) // 55374
