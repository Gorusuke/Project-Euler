function intRightTriangles(n) {
  let maxPerimeter = 0
  let maxTriangles = 0
  for (let p = 1; p <= n; p++) {
    const triangles = countSolution(p);
    if (triangles > maxTriangles) {
      maxTriangles = triangles
      maxPerimeter = p
    }
  }
  return maxPerimeter;
}

function countSolution(p) {
  let count = 0
  for (let i = 0; i <= p; i++) {
    for (let j = i; j <= p; j++) {
      const k = p - i - j
      if (j <= k && (i * i) + (j * j) === k * k) count++
    }
  }
  return count
}


console.log(intRightTriangles(500)) // 420
console.log(intRightTriangles(800)) // 720
console.log(intRightTriangles(900)) // 840
console.log(intRightTriangles(1000)) // 840
