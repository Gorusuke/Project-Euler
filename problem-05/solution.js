function smallestMult(n) {
  const numbersArr = Array.from({ length: n }).map((_, i) => i + 1)
  let smallestMultiple = null
  for (let idx = 1; idx < Math.pow(10, 9); idx++) {
    const isModul = numbersArr.every(x => idx % x === 0)
    if (isModul) {
      smallestMultiple = idx
      break
    }
  }
  return smallestMultiple;
}

function smallestMult(n) {
  function gcd(a, b) {
    while (b) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  let multiple = 1;
  for (let i = 2; i <= n; i++) {
    multiple = (multiple * i) / gcd(multiple, i)
  }
  return multiple;
}

console.log(smallestMult(5)) // 60
console.log(smallestMult(7)) // 420
console.log(smallestMult(10)) // 2520
console.log(smallestMult(13)) // 360360
console.log(smallestMult(20)) // 232792560
console.log(smallestMult(35)) // 232792560