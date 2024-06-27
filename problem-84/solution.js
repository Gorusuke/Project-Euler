function monopolyOdds(n) {
  function chanceCard(position, chanceCardPosition) {
    chanceCardPosition = (chanceCardPosition + 1) % 16;
    if (chanceCardPosition < 6) position = chanceCardsMoves[chanceCardPosition]
    else if (chanceCardPosition === 6 || chanceCardPosition === 7) position = nextMovesFromR[position]
    else if (chanceCardPosition === 8) position = nextMovesFromU[position]
    else if (chanceCardPosition === 9) position -= 3
    return [position, chanceCardPosition]
  }

  function chestCard(position, chestPosition) {
    chestPosition = (chestPosition + 1) % 16
    if (chestPosition < 2) position = chestCardsMoves[chestPosition]
    return [position, chestPosition]
  }

  function isChest(position) {
    return position === 2 || position === 17 || position === 33
  }

  function isChance(position) {
    return position === 7 || position === 22 || position === 36
  }

  function isJail(position) {
    return position === 30
  }

  function roll(dice) {
    return Math.floor(Math.random() * dice) + 1
  }

  function getTopThree(board) {
    return sortByVisits(board)
      .slice(0, 3)
      .map(elem => elem[0].toString().padStart(2, '0'))
      .join('')
  }

  function sortByVisits(board) {
    return board
      .map((element, index) => [index, element])
      .sort((a, b) => a[1] - b[1])
      .reverse()
  }

  const rounds = 2000000
  const chestCardsMoves = [0, 10]
  const chanceCardsMoves = [0, 10, 11, 24, 39, 5]
  const nextMovesFromR = { 7: 15, 22: 25, 36: 5 }
  const nextMovesFromU = { 7: 12, 36: 12, 22: 28 }

  const board = new Array(40).fill(0)
  let doubleCount = 0
  let curPosition = 0
  let curChestCard = 0
  let curChanceCard = 0

  for (let i = 0; i < rounds; i++) {
    const dice1 = roll(n)
    const dice2 = roll(n)

    if (dice1 === dice2) doubleCount++
    else doubleCount = 0

    if (doubleCount > 2) {
      curPosition = 10
      doubleCount = 0
    } else {
      curPosition = (curPosition + dice1 + dice2) % 40
      if (isChance(curPosition)) [curPosition, curChanceCard] = chanceCard(curPosition, curChanceCard)
      else if (isChest(curPosition)) [curPosition, curChestCard] = chestCard(curPosition, curChestCard)
      else if (isJail(curPosition)) curPosition = 10
    }
    board[curPosition]++
  }
  return getTopThree(board)
}

console.log(monopolyOdds(8)) // '102400'
console.log(monopolyOdds(10)) // '100024'
console.log(monopolyOdds(20)) // '100005'
console.log(monopolyOdds(4)) // '101524' 
