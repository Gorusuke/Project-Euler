function anagramicSquares(words) {
  function findMaximumSquare(squares, word1, word2) {
    let maximumSquare = 0
    for (let i = 0; i < squares.length; i++) {
      const length = squares[i].toString().length
      if (length < word1.length) continue
      if (length > word1.length) break
      const word1Square = squares[i]
      const letterToDigit = mapLettersToDigits(word1, word1Square)
      const noProperMappingExist = Object.keys(letterToDigit).length === 0
      const word2Square = getNumberFromMapping(word2, letterToDigit)
      const doesWord2SquareExist = squares.indexOf(word2Square) !== -1
      if (noProperMappingExist || word2Square === 0) continue
      if (doesWord2SquareExist) {
        const pairMaximum = Math.max(word1Square, word2Square)
        maximumSquare = Math.max(maximumSquare, pairMaximum)
      }
    }
    return maximumSquare
  }

  function getNumberFromMapping(word, letterToDigit) {
    const wouldNumberHaveLeadingZero = letterToDigit[word[0]] === 0
    if (wouldNumberHaveLeadingZero) return 0
    let number = 0
    for (let i = 0; i < word.length; i++) {
      number = number * 10 + letterToDigit[word[i]]
    }
    return number
  }

  function mapLettersToDigits(word, square) {
    const letterToDigit = {}
    for (let j = word.length - 1; j >= 0; j--) {
      const curDigit = square % 10
      square = Math.floor(square / 10)
      const curLetter = word[j]
      const isLetterRepeated = letterToDigit.hasOwnProperty(curLetter)
      if (isLetterRepeated) {
        const isLetterUsedForTheSameDigit = letterToDigit[curLetter] === curDigit
        if (isLetterUsedForTheSameDigit) continue
        return {}
      }
      const isDigitUsed = Object.values(letterToDigit).indexOf(curDigit) !== -1
      if (isDigitUsed) return {}
      letterToDigit[curLetter] = curDigit
    }
    return letterToDigit
  }

  function groupWordsWithSameLetters(words) {
    const lettersToWords = {}
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      const sortedLetters = word.split('').sort().join('')
      if (!lettersToWords.hasOwnProperty(sortedLetters)) lettersToWords[sortedLetters] = []
      lettersToWords[sortedLetters].push(word)
    }
    return lettersToWords
  }

  const lettersToWords = groupWordsWithSameLetters(words)
  const anagrams = Object.keys(lettersToWords).filter(
    letters => lettersToWords[letters].length > 1
  )
  const lengthOfLongestAnagram = anagrams
    .map(anagram => anagram.length)
    .sort((a, b) => b - a)[0]

  const squares = []
  const numberLimit = (10 ** lengthOfLongestAnagram) ** 0.5
  for (let number = 2; number < numberLimit; number++) {
    const square = number ** 2
    squares.push(square)
  }

  let largestSquare = 0
  for (let i = 0; i < anagrams.length; i++) {
    const curWords = lettersToWords[anagrams[i]]
    for (let j = 0; j < curWords.length; j++) {
      for (let k = j + 1; k < curWords.length; k++) {
        const squareValue = findMaximumSquare(
          squares,
          curWords[j],
          curWords[k]
        )
        largestSquare = Math.max(squareValue, largestSquare)
      }
    }
  }
  return largestSquare
}


const testWords1 = [
  "DAMAGE", "DANGER", "DANGEROUS", "DARK", "DATA", "DATE", "DAUGHTER", "DAY", "DEAD", "DEAL",
  "DEATH", "DEBATE", "DEBT", "DECADE", "DECIDE", "DECISION", "DECLARE", "DEEP", "DEFENCE",
  "DEFENDANT", "DEFINE", "DEFINITION", "DEGREE", "DELIVER", "DEMAND", "DEMOCRATIC", "DEMONSTRATE",
  "DENY", "DEPARTMENT", "DEPEND", "DEPUTY", "DERIVE", "DESCRIBE", "DESCRIPTION", "DESIGN", "DESIRE",
  "DESK", "DESPITE", "DESTROY", "DETAIL", "DETAILED", "DETERMINE", "DEVELOP", "DEVELOPMENT", "DEVICE",
  "DIE", "DIFFERENCE", "DIFFERENT", "DIFFICULT", "DIFFICULTY", "DINNER", "DIRECT", "DIRECTION",
  "DIRECTLY", "DIRECTOR", "DISAPPEAR", "DISCIPLINE", "DISCOVER", "DISCUSS", "DISCUSSION", "DISEASE",
  "DISPLAY", "DISTANCE", "DISTINCTION", "DISTRIBUTION", "DISTRICT", "DIVIDE", "DIVISION", "DO",
  "DOCTOR", "DOCUMENT", "DOG", "DOMESTIC", "DOOR", "DOUBLE", "DOUBT", "DOWN", "DRAW", "DRAWING",
  "DREAM", "DRESS", "DRINK", "DRIVE", "DRIVER", "DROP", "DRUG", "DRY", "DUE", "DURING", "DUTY",
  "LABOUR", "LACK", "LADY", "LAND", "LANGUAGE", "LARGE", "LARGELY", "LAST", "LATE", "LATER",
  "LATTER", "LAUGH", "LAUNCH", "LAW", "LAWYER", "LAY", "LEAD", "LEADER", "LEADERSHIP", "LEADING",
  "LEAF", "LEAGUE", "LEAN", "LEARN", "LEAST", "LEAVE", "LEFT", "LEG", "LEGAL", "LEGISLATION",
  "LENGTH", "LESS", "LET", "LETTER", "LEVEL", "LIABILITY", "LIBERAL", "LIBRARY", "LIE", "LIFE",
  "LIFT", "LIGHT", "LIKE", "LIKELY", "LIMIT", "LIMITED", "LINE", "LINK", "LIP", "LIST", "LISTEN",
  "LITERATURE", "LITTLE", "LIVE", "LIVING", "LOAN", "LOCAL", "LOCATION", "LONG", "LOOK", "LORD",
  "LOSE", "LOSS", "LOT", "LOVE", "LOVELY", "LOW", "LUNCH"
]

console.log(anagramicSquares(testWords1)) // 4761