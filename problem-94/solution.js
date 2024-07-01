function almostEquilateralTriangles(limit) {
  let perimetersSum = 0
  let sidesAB = 1
  let sideC = 1
  let perimeter = 0
  let perimeterOffset = 1

  while (perimeter <= limit) {
    [sidesAB, sideC] = [4 * sidesAB - sideC + 2 * perimeterOffset, sidesAB]
    perimeterOffset = -perimeterOffset
    perimetersSum += perimeter
    perimeter = 3 * sidesAB - perimeterOffset
  }

  return perimetersSum
}

console.log(almostEquilateralTriangles(50)) // 66
console.log(almostEquilateralTriangles(10000)) // 3688
console.log(almostEquilateralTriangles(10000000)) // 9973078
console.log(almostEquilateralTriangles(1000000000)) // 518408346
