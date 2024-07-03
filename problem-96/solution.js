function suDoku(puzzlesArr) {
  function solve(puzzle) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (puzzle[row][col] > 0) continue
        const allowedNumbers = getAllowedNumbers(puzzle, row, col)
        for (let number = 1; number <= 9; number++) {
          if (allowedNumbers[number]) {
            puzzle[row][col] = number
            if (solve(puzzle)) return true
          }
        }
        puzzle[row][col] = 0
        return false
      }
    }
    return true
  }

  function getAllowedNumbers(puzzle, row, col) {
    const allowed = new Array(10).fill(true)
    allowed[0] = false
    for (let i = 0; i < 9; i++) {
      const numberInSameRow = puzzle[row][i]
      if (numberInSameRow > 0) allowed[numberInSameRow] = false
      const numberInSameCol = puzzle[i][col]
      if (numberInSameCol > 0) allowed[numberInSameCol] = false
    }

    const rowOfSubGrid = Math.floor(row / 3) * 3
    const colOfSubGrid = Math.floor(col / 3) * 3
    for (let rowInSubGrid = 0; rowInSubGrid < 3; rowInSubGrid++) {
      for (let colInSubGrid = 0; colInSubGrid < 3; colInSubGrid++) {
        const numberInSameSubGrid = puzzle[rowOfSubGrid + rowInSubGrid][colOfSubGrid + colInSubGrid]
        if (numberInSameSubGrid > 0) allowed[numberInSameSubGrid] = false
      }
    }
    return allowed
  }

  function parsePuzzle(string) {
    const puzzle = []
    for (let row = 0; row < 9; row++) {
      puzzle.push(
        string
          .slice(row * 9, 9 + row * 9)
          .split('')
          .map(x => parseInt(x, 10))
      )
    }
    return puzzle
  }

  let sum = 0
  for (let i = 0; i < puzzlesArr.length; i++) {
    const puzzle = parsePuzzle(puzzlesArr[i])
    if (solve(puzzle)) sum += 100 * puzzle[0][0] + 10 * puzzle[0][1] + puzzle[0][2]
  }

  return sum
}

const testPuzzles1 = [
  '003020600900305001001806400008102900700000008006708200002609500800203009005010300',
  '200080300060070084030500209000105408000000000402706000301007040720040060004010003',
  '000000907000420180000705026100904000050000040000507009920108000034059000507000000'
];

console.log(suDoku(testPuzzles1)) // 1190
