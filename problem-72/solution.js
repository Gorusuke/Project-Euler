function countingFractions(limit) {
  const phi = {}
  let count = 0

  for (let i = 2; i <= limit; i++) {
    if (!phi[i]) phi[i] = i
    if (phi[i] === i) {
      for (let j = i; j <= limit; j += i) {
        if (!phi[j]) phi[j] = j
        phi[j] = (phi[j] / i) * (i - 1)
      }
    }
    count += phi[i]
  }
  return count
}

console.log(countingFractions(8)) // 21
console.log(countingFractions(20000)) // 121590395
console.log(countingFractions(500000)) // 75991039675
console.log(countingFractions(1000000)) // 303963552391