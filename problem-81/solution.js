function pathSumTwoWays(matrix) {
  function makeMinimalMove(row, column) {
    if (resultMatrix[row][column + 1] < resultMatrix[row + 1][column]) return resultMatrix[row][column + 1]
    return resultMatrix[row + 1][column]
  }
  const size = matrix.length
  const resultMatrix = []
  for (let i = 0; i < size; i++) {
    resultMatrix.push([...matrix[i]])
  }
  for (let i = size - 2; i >= 0; i--) {
    resultMatrix[size - 1][i] += resultMatrix[size - 1][i + 1]
    resultMatrix[i][size - 1] += resultMatrix[i + 1][size - 1]
  }
  for (let row = size - 2; row >= 0; row--) {
    for (let column = size - 2; column >= 0; column--) {
      resultMatrix[row][column] += makeMinimalMove(row, column)
    }
  }
  return resultMatrix[0][0]
}

const testMatrix1 = [
  [131, 673, 234, 103, 18],
  [201, 96, 342, 965, 150],
  [630, 803, 746, 422, 111],
  [537, 699, 497, 121, 956],
  [805, 732, 524, 37, 331]
]

console.log(pathSumTwoWays(testMatrix1)) // 2427
