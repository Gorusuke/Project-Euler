function digitFactorialChains(n) {
  function sumDigitsFactorials(number) {
    let sum = 0
    while (number > 0) {
      sum += factorials[number % 10]
      number = Math.floor(number / 10)
    }
    return sum
  }

  const factorials = [1]
  for (let i = 1; i < 10; i++) {
    factorials.push(factorials[factorials.length - 1] * i)
  }

  const sequences = {
    169: 3,
    871: 2,
    872: 2,
    1454: 3,
    45362: 2,
    45461: 2,
    3693601: 3
  };
  let result = 0

  for (let i = 2; i < n; i++) {
    let curNum = i
    let chainLength = 0
    const curSequence = []
    while (curSequence.indexOf(curNum) === -1) {
      curSequence.push(curNum)
      curNum = sumDigitsFactorials(curNum)
      chainLength++
      if (sequences.hasOwnProperty(curNum) > 0) {
        chainLength += sequences[curNum]
        break
      }
    }
    if (chainLength === 60) result++
    for (let j = 1; j < curSequence.length; j++) {
      sequences[curSequence[j]] = chainLength - j
    }
  }
  return result;
}

console.log(digitFactorialChains(2000)) // 6
console.log(digitFactorialChains(100000)) // 42
console.log(digitFactorialChains(500000)) // 282
console.log(digitFactorialChains(1000000)) // 402
