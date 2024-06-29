function productSumNumbers(limit) {
  function getProductSums(curProduct, curSum, factorsCount, start) {
    const k = curProduct - curSum + factorsCount
    if (k <= limit) {
      if (curProduct < minimalProductSums[k]) minimalProductSums[k] = curProduct
      for (let i = start; i < Math.floor((limit / curProduct) * 2) + 1; i++) {
        getProductSums(curProduct * i, curSum + i, factorsCount + 1, i)
      }
    }
  }

  const minimalProductSums = Array(limit + 1).fill(2 * limit);
  getProductSums(1, 1, 1, 2)
  const uniqueProductSums = [...new Set(minimalProductSums.slice(2))]
  let sum = 0
  for (let i = 0; i < uniqueProductSums.length; i++) {
    sum += uniqueProductSums[i]
  }
  return sum
}

console.log(productSumNumbers(6)) // 30
console.log(productSumNumbers(12)) // 61
console.log(productSumNumbers(300)) // 12686
console.log(productSumNumbers(6000)) // 2125990
console.log(productSumNumbers(12000)) // 7587457
