class Fraction {
  constructor(numerator, denominator) {
    const reduction = this.reduce(numerator, denominator)
    this.numerator = reduction[0]
    this.denominator = reduction[1]

    if (this.denominator < 0) {
      this.denominator *= -1
      this.numerator *= -1
    }
  }

  getNumerator() {
    return this.numerator
  }

  getDenominator() {
    return this.denominator
  }

  addFraction(frac) {
    return this.addFractions([frac])
  }

  addFractions(fracs) {
    return this.operate(fracs, (a, b) => {
      return new Fraction(
        a.getNumerator() * b.getDenominator() + b.getNumerator() * a.getDenominator(),
        a.getDenominator() * b.getDenominator()
      )
    })
  }

  subtractFraction(frac) {
    return this.subtractFractions([frac])
  }

  subtractFractions(fracs) {
    return this.operate(fracs, (a, b) => {
      return new Fraction(
        a.getNumerator() * b.getDenominator() - b.getNumerator() * a.getDenominator(),
        a.getDenominator() * b.getDenominator()
      )
    })
  }

  multiplyFraction(frac) {
    return this.multiplyFractions([frac])
  }

  multiplyFractions(fracs) {
    return this.operate(fracs, (a, b) => {
      return new Fraction(
        a.getNumerator() * b.getNumerator(),
        a.getDenominator() * b.getDenominator()
      )
    })
  }

  divideFraction(frac) {
    return this.divideFractions([frac])
  }

  divideFractions(fracs) {
    return this.operate(fracs, (a, b) => {
      return new Fraction(
        a.getNumerator() * b.getDenominator(),
        a.getDenominator() * b.getNumerator()
      )
    })
  }

  operate(fractions, callback) {
    if (fractions.length === 0) return this
    fractions = [this, ...fractions]
    return this.subOperate(fractions, callback)
  }

  subOperate(fractions, callback) {
    const result = callback(fractions[0], fractions[1])
    if (fractions.length === 2) return result
    return this.subOperate([result, ...fractions.splice(2)], callback)
  }

  reduce(numerator, denominator) {
    const gcd = Fraction.gcdTwoNums(numerator, denominator)
    return [numerator / gcd, denominator / gcd]
  }

  static gcdTwoNums(a, b) {
    return b ? Fraction.gcdTwoNums(b, a % b) : a
  }
}

// --------------------------------------------------------------------------------

const ops = ["+", "-", "*", "/"]
function arithmeticExpressions() {
  let digits = []
  let longestConsecutive = 0

  generateSet(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [],
    (set) => {
      const thisLen = getConsecutiveLen(set)
      if (thisLen > longestConsecutive) {
        longestConsecutive = thisLen
        digits = set
      }
    }
  )

  return Number(digits.sort((a, b) => a - b).join(""))
}

function getConsecutiveLen(set) {
  let totalResults = new Set()
  getPermutationsOfSet(set, [], perm => {
    performCalc(
      perm.map(n => new Fraction(n, 1)),
      new Fraction(0, 1),
      totalResults
    )
  })

  if (!totalResults.has(1)) return 0

  const sorted = Array.from(totalResults)
    .filter(n => n > 0)
    .sort((a, b) => a - b)
  let longestSeqLen = 0
  let thisSeqLen = 0
  let lastN = 0
  for (const n of sorted) {
    if (n === lastN + 1) {
      thisSeqLen++
      if (thisSeqLen > longestSeqLen) longestSeqLen = thisSeqLen
    }
    else thisSeqLen = 0
    lastN = n
  }

  return longestSeqLen
}

function performCalc(set, partialCalc, partialIntegerSet) {
  const remaining = set.slice(1)
  ops.forEach((op) => {
    const newPartial = performSingleCalc(partialCalc, set[0], op)
    if (newPartial !== null) {
      if (remaining.length > 0) performCalc(remaining, newPartial, partialIntegerSet)
      else if (newPartial.getDenominator() === 1) partialIntegerSet.add(newPartial.getNumerator())
    }
  })
}

function performSingleCalc(a, b, op) {
  switch (op) {
    case "+":
      return a.addFraction(b)
    case "-":
      return a.subtractFraction(b)
    case "*":
      return a.multiplyFraction(b)
    default:
      return b.getNumerator() === 0 ? null : a.divideFraction(b)
  }
}

function generateSet(choices, partialSet, callback) {
  if (4 - partialSet.length > choices.length) return
  if (partialSet.length === 4) {
    callback(partialSet)
    return
  }
  const choicesLeft = choices.slice(1)
  generateSet(choicesLeft, partialSet, callback)
  const newPartialSet = [...partialSet, choices[0]]
  generateSet(choicesLeft, newPartialSet, callback)
}

function getPermutationsOfSet(choices, setSoFar, callback) {
  if (choices.length === 1) {
    setSoFar.push(choices[0])
    callback(setSoFar)
    return
  }

  for (let i = 0; i < choices.length; i++) {
    const remainingChoices = [...choices]
    remainingChoices.splice(i, 1)
    const newSet = [...setSoFar, choices[i]]
    getPermutationsOfSet(remainingChoices, newSet, callback)
  }
}

console.log(arithmeticExpressions()) // 1258
