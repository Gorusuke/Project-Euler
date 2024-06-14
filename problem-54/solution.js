function pokerHands(arr) {
  let numLeftHandWins = 0
  readFileLines(arr, (line) => {
    const [leftHand, rightHand] = mapLineToHands(line)
    const leftHandRank = rankHand(leftHand)
    const rightHandRank = rankHand(rightHand)
    if (leftHandRank > rightHandRank) numLeftHandWins++
  })
  return numLeftHandWins
}

function readFileLines(arr, callback) {
  for (const line of arr) {
    callback(line)
  }
}

function mapLineToHands(line) {
  const leftHandCards = []
  const rightHandCards = []

  line.split(" ").forEach((cardStr, index) => {
    if (index > 9) return

    const [valueStr, suit] = cardStr
    let value = 0
    switch (valueStr) {
      case "T":
        value = 10
        break
      case "J":
        value = 11
        break
      case "Q":
        value = 12
        break
      case "K":
        value = 13
        break
      case "A":
        value = 14
        break
      default:
        value = parseInt(valueStr)
        break
    }

    const card = { value, suit }
    if (index < 5) leftHandCards.push(card)
    else rightHandCards.push(card)
  })

  return [
    mapCardsToHand(leftHandCards),
    mapCardsToHand(rightHandCards)
  ]
}

function mapCardsToHand(cards) {
  let suitsFound = new Set()

  let hand = {
    values: [],
    numSuits: 0
  }

  cards = cards.sort((a, b) => b.value - a.value)

  cards.forEach(card => {
    const handValuesIndex = hand.values.findIndex(item => item.value === card.value)
    if (handValuesIndex > -1) hand.values[handValuesIndex].count++
    else hand.values.push({ value: card.value, count: 1 })
    suitsFound.add(card.suit)
  })

  hand.numSuits = suitsFound.size
  return hand
}

function rankHand(hand) {
  let valueStr = ""
  switch (hand.numSuits) {
    case 1:
      valueStr = rankHandOneSuit(hand)
      break
    default:
      valueStr = rankHandManySuits(hand)
      break
  }

  return parseInt(valueStr)
}

function rankHandOneSuit(hand) {
  if (!handIsStraight(hand)) return `6${concatValues(hand).padStart(10, "0")}`
  if (hand.values[0].value === 14) return `10${concatValues(hand).padStart(10, "0")}`
  return `9${concatValues(hand).padStart(10, "0")}`
}

function rankHandManySuits(hand) {
  if (hand.values.length === 2) {
    const fourHand = hand.values.find(hv => hv.count === 4)
    if (fourHand) {
      const fourValue = fourHand.value + ""
      const oneValue = hand.values.find(hv => hv.count === 1).value + ""
      return `8${fourValue.padStart(2, "0")}${oneValue.padStart(8, "0")}`
    }

    const threeValue = hand.values.find(hv => hv.count === 3).value + ""
    const twoValue = hand.values.find(hv => hv.count === 2).value + ""
    return `7${threeValue.padStart(5, "0")}${twoValue.padStart(5, "0")}`
  }

  if (hand.values.length === 5) {
    if (handIsStraight(hand)) return `5${concatValues(hand).padStart(10, "0")}`
    return `1${concatValues(hand).padStart(10, "0")}`
  }

  if (hand.values.length === 3) {
    const threeHand = hand.values.find(hv => hv.count === 3)
    if (threeHand) {
      const threeValue = threeHand.value + ""
      const ones = hand.values.filter(hv => hv.count === 1)
        .sort((a, b) => b.value - a.value)
        .map(item => item.value.toString().padStart(2, "0"))
        .join("")
      return `4${threeValue.padStart(2, "0")}${ones.padStart(8, "0")}`
    }

    const twos = hand.values.filter(hv => hv.count === 2)
      .sort((a, b) => b.value - a.value)
      .map(item => item.value.toString().padStart(2, "0"))
      .join("")
    const one = hand.values.find(hv => hv.count === 1).value + ""
    return `3${twos.padStart(4, "0")}${one.padStart(6, "0")}`
  }

  if (hand.values.length === 4) {
    const two = hand.values.find(hv => hv.count === 2).value + ""
    const ones = hand.values.filter(hv => hv.count === 1)
      .sort((a, b) => b.value - a.value)
      .map(item => item.value.toString().padStart(2, "0"))
      .join("")
    return `2${two.padStart(2, "0")}${ones.padStart(8, "0")}`
  }
}

function handIsStraight(hand) {
  return hand.values.length === 5 && hand.values[0].value - hand.values[4].value === 4
}

function concatValues(hand, startIndex = 0, endIndex = 4) {
  let str = ""
  for (let i = startIndex; i <= endIndex; i++) {
    str = `${str}${hand.values[i].value.toString().padStart(2, "0")}`
  }
  return str
}

const testArr = [
  '8C TS KC 9H 4S 7D 2S 5D 3S AC',
  '5C AD 5D AC 9C 7C 5H 8D TD KS',
  '3H 7H 6S KC JS QH TD JC 2D 8S',
  'TH 8H 5C QS TC 9H 4D JC KS JS',
  '7C 5H KC QH JD AS KH 4C AD 4S'
]

console.log(pokerHands(testArr)) // 2
