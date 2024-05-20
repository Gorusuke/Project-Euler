function distinctPowers(n) {
  const numbers = {}
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= n; j++) {
      const result = Math.pow(i, j)
      numbers[result] = numbers[result]
    }
  }
  return Object.keys(numbers).length
}

console.log(distinctPowers(15)) // 177
console.log(distinctPowers(20)) // 324
console.log(distinctPowers(25)) // 519
console.log(distinctPowers(30)) // 755
