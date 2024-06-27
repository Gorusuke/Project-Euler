function pathSumThreeWays(matrix) {
  function makeMinimumMoveFromUpOrRight(row, column) {
    const curValue = matrix[row][column]
    if (values[row - 1] > values[row]) return values[row] + curValue;
    return values[row - 1] + curValue
  }

  function isGoingFromDownBetter(row, column) {
    return values[row] > values[row + 1] + matrix[row][column]
  }

  const size = matrix.length
  const values = []

  for (let row = 0; row < size; row++) {
    values.push(matrix[row][size - 1])
  }

  for (let column = size - 2; column >= 0; column--) {
    values[0] += matrix[0][column]
    for (let row = 1; row < size; row++) {
      values[row] = makeMinimumMoveFromUpOrRight(row, column)
    }
    for (let row = size - 2; row >= 0; row--) {
      if (isGoingFromDownBetter(row, column)) {
        values[row] = values[row + 1] + matrix[row][column]
      }
    }
  }
  return Math.min(...values)
}

const testMatrix1 = [
  [131, 673, 234, 103, 18],
  [201, 96, 342, 965, 150],
  [630, 803, 746, 422, 111],
  [537, 699, 497, 121, 956],
  [805, 732, 524, 37, 331]
]

console.log(pathSumThreeWays(testMatrix1)) // 994
