function rightTrianglesIntCoords(limit) {
  function isRightTriangle(points) {
    for (let i = 0; i < points.length; i++) {
      const pointA = points[i]
      const pointB = points[(i + 1) % 3]
      const pointC = points[(i + 2) % 3]
      const vectorAB = [pointB[0] - pointA[0], pointB[1] - pointA[1]]
      const vectorAC = [pointC[0] - pointA[0], pointC[1] - pointA[1]]
      if (isRightAngleBetween(vectorAB, vectorAC)) return true
    }
    return false
  }

  function isRightAngleBetween(vector1, vector2) {
    return vector1[0] * vector2[0] + vector1[1] * vector2[1] === 0
  }

  function getSetKey(points) {
    return (
      '0.0,' +
      points
        .sort((a, b) => a[0] - b[0])
        .map(point => point.join('.'))
        .join(',')
    )
  }

  const pointO = [0, 0]
  const rightTriangles = new Set()
  for (let x1 = 1; x1 <= limit; x1++) {
    for (let y1 = 0; y1 <= limit; y1++) {
      const pointP = [x1, y1]
      for (let x2 = 0; x2 <= limit; x2++) {
        for (let y2 = 1; y2 <= limit; y2++) {
          const pointQ = [x2, y2];
          if (pointP[0] === pointQ[0] && pointP[1] === pointQ[1]) continue
          if (isRightTriangle([pointO, pointP, pointQ])) rightTriangles.add(getSetKey([pointP, pointQ]))
        }
      }
    }
  }
  return rightTriangles.size
}

console.log(rightTrianglesIntCoords(2)) // 14
console.log(rightTrianglesIntCoords(10)) // 448
console.log(rightTrianglesIntCoords(25)) // 3207
console.log(rightTrianglesIntCoords(50)) // 14234
