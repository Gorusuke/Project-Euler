function cubicPermutations(n) {
  function getDigits(num) {
    const digits = []
    while (num > 0) {
      digits.push(num % 10);
      num = Math.floor(num / 10);
    }
    return digits
  }

  const digitsToCubeCounts = {};
  let curNum = 1
  let digits

  while (!digitsToCubeCounts[digits] || digitsToCubeCounts[digits].count < n) {
    const cube = Math.pow(curNum, 3)
    digits = getDigits(cube).sort().join()
    if (!digitsToCubeCounts[digits]) {
      digitsToCubeCounts[digits] = {
        count: 1,
        smallestCube: cube
      }
    } else digitsToCubeCounts[digits].count += 1
    curNum++
  }
  return digitsToCubeCounts[digits].smallestCube
}

console.log(cubicPermutations(2)) // 125
console.log(cubicPermutations(3)) // 41063625
console.log(cubicPermutations(4)) // 1006012008
console.log(cubicPermutations(5)) // 127035954683
