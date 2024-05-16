function specialPythagoreanTriplet(n) {
  for (let a = 1; a < n; a++) {
    for (let b = a; b < n; b++) {
      const c = n - a - b;
      const aSquare = Math.pow(a, 2)
      const bSquare = Math.pow(b, 2)
      const cSquare = Math.pow(c, 2)
      if (cSquare === aSquare + bSquare) {
        return a * b * c;
      }
    }
  }
}

console.log(specialPythagoreanTriplet(24)) // 480
console.log(specialPythagoreanTriplet(120)) // 49920
console.log(specialPythagoreanTriplet(1000)) // 31875000