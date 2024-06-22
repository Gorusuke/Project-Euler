function maximumPathSumII(triangle) {
  const triangleCopy = triangle.map(row => [...row])
  for (let i = triangleCopy.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      triangleCopy[i][j] += Math.max(triangleCopy[i + 1][j], triangleCopy[i + 1][j + 1])
    }
  }
  return triangleCopy[0][0]
}

console.log(maximumPathSumII([[3, 0, 0, 0], [7, 4, 0, 0], [2, 4, 6, 0], [8, 5, 9, 3]])) // 23
