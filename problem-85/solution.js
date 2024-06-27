function countingRectangles(n) {
  function numberOfRectangles(h, w) {
    return (h * (h + 1) * w * (w + 1)) / 4
  }

  function rectangleArea(h, w) {
    return h * w
  }

  let rectanglesCount = 1
  let maxSide = 1
  while (rectanglesCount < n) {
    maxSide++
    rectanglesCount = numberOfRectangles(maxSide, 1)
  }

  let bestDiff = Math.abs(rectanglesCount - n)
  let bestSize = [maxSide, 1]
  let curHeight = maxSide - 1
  let curWidth = 1

  for (curWidth; curWidth < curHeight; curWidth++) {
    for (curHeight; curHeight > curWidth; curHeight--) {
      rectanglesCount = numberOfRectangles(curHeight, curWidth)
      const curDiff = Math.abs(rectanglesCount - n)
      if (curDiff < bestDiff) {
        bestDiff = curDiff
        bestSize = [curHeight, curWidth]
      }
      if (rectanglesCount < n) break
    }
  }
  return rectangleArea(...bestSize)
}

console.log(countingRectangles(18)) // 6
console.log(countingRectangles(250)) // 22
console.log(countingRectangles(50000)) // 364
console.log(countingRectangles(1000000)) // 1632
console.log(countingRectangles(2000000)) // 2772
