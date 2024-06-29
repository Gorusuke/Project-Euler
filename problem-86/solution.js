function cuboidRoute(n) {
  function getLength(a, b) {
    return Math.sqrt(a ** 2 + b ** 2)
  }

  let M = 2
  let counter = 0
  while (counter < n) {
    M++
    for (let baseHeightWidth = 3; baseHeightWidth <= 2 * M; baseHeightWidth++) {
      const pathLength = getLength(M, baseHeightWidth)
      if (Number.isInteger(pathLength)) {
        if (baseHeightWidth <= M) counter += Math.floor(baseHeightWidth / 2)
        else counter += 1 + M - Math.floor((baseHeightWidth + 1) / 2)
      }
    }
  }

  return M
}

console.log(cuboidRoute(2000)) // 100
console.log(cuboidRoute(25000)) // 320
console.log(cuboidRoute(500000)) // 1309
console.log(cuboidRoute(1000000)) // 1818
