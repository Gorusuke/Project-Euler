function passcodeDerivation(arr) {
  const numbersInPasscode = []
  const relativePositions = Array(10)
    .fill()
    .map(() => Array(10).fill(0))

  for (let i = 0; i < arr.length; i++) {
    const curAttempt = arr[i]
      .toString()
      .split('')
      .map(key => parseInt(key, 10))
    for (let j = 0; j < curAttempt.length; j++) {
      if (numbersInPasscode.indexOf(curAttempt[j]) === -1) numbersInPasscode.push(curAttempt[j])
      for (let k = j + 1; k < curAttempt.length; k++) {
        relativePositions[curAttempt[j]][curAttempt[k]] += 1
      }
    }
  }

  const ranks = {};
  for (let i = 0; i < numbersInPasscode.length; i++) {
    const curNumber = numbersInPasscode[i]
    ranks[curNumber] = relativePositions[curNumber].filter(count => count > 0).length
  }

  const passcode = numbersInPasscode
    .sort((i, j) => ranks[i] - ranks[j])
    .reverse()
    .join('')

  return parseInt(passcode, 10)
}

const keylog1 = [
  319, 680, 180, 690, 129, 620,
  762, 689, 762, 318, 368, 710,
  720, 710, 629, 168, 160, 689,
  716, 731, 736, 729, 316, 729,
  729, 710, 769, 290, 719, 680,
  318, 389, 162, 289, 162, 718,
  729, 319, 790, 680, 890, 362,
  319, 760, 316, 729, 380, 319,
  728, 716,
];

console.log(passcodeDerivation(keylog1)) // 73162890
