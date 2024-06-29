function diceToString(dOne, dTwo) {
  const dOneSorted = Array.from(dOne).sort((a, b) => a - b)
  const dTwoSorted = Array.from(dTwo).sort((a, b) => a - b)
  let dOneSum = dOneSorted.reduce((acc, sum) => acc + sum)
  let dTwoSum = dTwoSorted.reduce((acc, sum) => acc + sum)
  let dMin = dOneSorted
  let dMax = dTwoSorted

  if (dTwoSum > dOneSum) {
    dMin = dTwoSorted
    dMax = dOneSorted
  } else if (dTwoSum === dOneSum) {
    for (let i = 0; i < dTwoSorted.length; i++) {
      dOneSum -= dOneSorted[i]
      dTwoSum -= dTwoSorted[i]
      if (dTwoSum > dOneSum) {
        dMin = dTwoSorted
        dMax = dOneSorted
        break
      } else if (dTwoSum < dOneSum) break
    }
  }

  return dMin.join(",") + "." + dMax.join(",")
}

function generateDice(choices, partialOne, partialTwo, callback) {
  if (partialOne.size < (6 - choices.length) || partialTwo.size < (6 - choices.length)) return
  if (partialOne.size === 6 && partialTwo.size === 6) {
    callback(partialOne, partialTwo)
    return
  }

  if (choices.length === 1) {
    let newPartialOne = partialOne
    let newPartialTwo = partialTwo
    if (partialOne.size < 6) {
      newPartialOne = new Set(partialOne)
      newPartialOne.add(choices[0])
    }
    if (partialTwo.size < 6) {
      newPartialTwo = new Set(partialTwo)
      newPartialTwo.add(choices[0])
    }
    generateDice([], newPartialOne, newPartialTwo, callback);
    return
  }

  const newChoices = choices.slice(1)
  if (choices[0] === 7 || choices[0] === 6) {
    generateDice(newChoices, partialOne, partialTwo, callback);
  }

  let leftPartialOne = partialOne
  if (partialOne.size < 6) {
    leftPartialOne = new Set(partialOne)
    leftPartialOne.add(choices[0])
    generateDice(newChoices, leftPartialOne, partialTwo, callback)
  }

  let rightPartialTwo = partialTwo
  if (partialTwo.size < 6) {
    rightPartialTwo = new Set(partialTwo)
    rightPartialTwo.add(choices[0])
    generateDice(newChoices, partialOne, rightPartialTwo, callback)
  }

  if (partialOne.size < 6 && partialTwo.size < 6) {
    generateDice(newChoices, leftPartialOne, rightPartialTwo, callback);
  }
}

function areDiceValid(dOne, dTwo) {
  if (!setsMatch(0, 1, dOne, dTwo)) return false
  if (!setsMatch(0, 4, dOne, dTwo)) return false
  if (!setsMatchAny(0, new Set([6, 9]), dOne, dTwo)) return false
  if (!setsMatchAny(1, new Set([6, 9]), dOne, dTwo)) return false
  if (!setsMatch(2, 5, dOne, dTwo)) return false
  if (!setsMatchAny(3, new Set([6, 9]), dOne, dTwo)) return false
  if (!setsMatchAny(4, new Set([6, 9]), dOne, dTwo)) return false
  if (!setsMatch(8, 1, dOne, dTwo)) return false
  return true;
}

function setsMatch(a, b, sOne, sTwo) {
  return sOne.has(a) && sTwo.has(b) || sOne.has(b) && sTwo.has(a)
}

function setHasAny(b, set) {
  for (const bItem of b) {
    if (set.has(bItem)) return true
  }
  return false;
}

function setsMatchAny(a, b, sOne, sTwo) {
  if (sOne.has(a)) {
    if (setHasAny(b, sTwo)) return true
  }

  if (sTwo.has(a)) {
    if (setHasAny(b, sOne)) return true
  }
  return false;
}

function cubeDigitPairs() {
  let validDiceSet = new Set()

  generateDice(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    new Set(),
    new Set(),
    (dOne, dTwo) => {
      if (areDiceValid(dOne, dTwo)) {
        const key = diceToString(dOne, dTwo)
        validDiceSet.add(key)
      }
    }
  )
  return validDiceSet.size
}

console.log(cubeDigitPairs()) // 1217
