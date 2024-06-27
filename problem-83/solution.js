function pathSumFourWays(matrix) {
  const MOVES = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];

  function getAllowedMoves(row, col) {
    const moves = []
    for (let i = 0; i < MOVES.length; i++) {
      const [rowChange, colChange] = MOVES[i]
      const nextRow = row + rowChange
      const nextCol = col + colChange
      if (isMoveAllowed(nextRow, nextCol)) moves.push([nextRow, nextCol])
    }
    return moves
  }

  function isMoveAllowed(nextRow, nextCol) {
    if (nextRow < 0 || nextRow >= size || nextCol < 0 || nextCol >= size) return false
    return true
  }

  const size = matrix.length
  const resultMatrix = Array(size)
    .fill()
    .map(() => Array(size).fill(Infinity))
  const [startRow, startCol] = Array(2).fill(size - 1)
  const queue = [[startRow, startCol]]
  resultMatrix[startRow][startCol] = matrix[startRow][startCol]

  while (queue.length > 0) {
    const [curRow, curCol] = queue.shift()
    const allowedMoves = getAllowedMoves(curRow, curCol)

    for (let i = 0; i < allowedMoves.length; i++) {
      const [nextRow, nextCol] = allowedMoves[i]
      const bestPath = resultMatrix[nextRow][nextCol]
      const newPath = resultMatrix[curRow][curCol] + matrix[nextRow][nextCol]
      if (newPath < bestPath) {
        resultMatrix[nextRow][nextCol] = newPath
        queue.push(allowedMoves[i])
      }
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

console.log(pathSumFourWays(testMatrix1)) // 2297
