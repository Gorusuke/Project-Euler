function singularIntRightTriangles(limit) {
  const euclidFormula = (m, n) => [m ** 2 - n ** 2, 2 * m * n, m ** 2 + n ** 2]
  const notBothOdd = (numberA, numberB) => (numberA + numberB) % 2 === 1
  const areCoprime = (numberA, numberB) => gcd(numberA, numberB) === 1

  function gcd(numberA, numberB) {
    if (numberB === 0) return numberA
    return gcd(numberB, numberA % numberB)
  }

  const trianglesWithPerimeter = new Array(limit + 1).fill(0)
  const mLimit = Math.sqrt(limit / 2)

  for (let m = 2; m < mLimit; m++) {
    for (let n = 1; n < m; n++) {
      if (notBothOdd(m, n) && areCoprime(m, n)) {
        const [sideA, sideB, sideC] = euclidFormula(m, n)
        const perimeter = sideA + sideB + sideC
        let curPerimeter = perimeter
        while (curPerimeter <= limit) {
          trianglesWithPerimeter[curPerimeter]++
          curPerimeter += perimeter
        }
      }
    }
  }
  return trianglesWithPerimeter.filter(trianglesCount => trianglesCount === 1).length
}

console.log(singularIntRightTriangles(48)) // 6
console.log(singularIntRightTriangles(700000)) // 75783
console.log(singularIntRightTriangles(1000000)) // 107876
console.log(singularIntRightTriangles(1500000)) // 161667
