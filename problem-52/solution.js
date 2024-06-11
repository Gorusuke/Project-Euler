function permutedMultiples(n) {
  function isSameNumber(number, numberToCompare) {
    const numberArr = [...number.toString()].sort((a, b) => a - b)
    const numberToCompareArr = [...numberToCompare.toString()].sort((a, b) => a - b)
    const hasSameDigits = numberArr.every((x, idx) => x === numberToCompareArr[idx])
    return hasSameDigits
  }

  let start = 1;
  let found = false;

  while (!found) {
    start *= 10;
    for (let i = start; i < start * 10 / n; i++) {
      found = true;
      for (let j = 2; j <= n; j++) {
        if (!isSameNumber(i, j * i)) found = false
      }
      if (found) return i
    }
  }
}

console.log(permutedMultiples(2)) // 125874
console.log(permutedMultiples(6)) // 142857
