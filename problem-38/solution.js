function pandigitalMultiples(k) {
  let max = 0
  for (let n = 2; n < k; n++) {
    for (let i = 1; i < Math.pow(10, k / n); i++) {
      let str = ''
      for (let j = 1; j <= n; j++) {
        str += i * j
      }
      if (isPandigital(str, k)) {
        max = Math.max(Number(str), max)
      }
    }
  }
  return max;
}


function isPandigital(str, n) {
  if (str.length !== n) return false
  const stringNumbers = Array.from({ length: n }).map((_, idx) => idx + 1)
  const temp = [...str].sort()
  return stringNumbers.every(x => temp.includes(x.toString()))
}

console.log(pandigitalMultiples(8)) // 78156234
console.log(pandigitalMultiples(9)) // 932718654
