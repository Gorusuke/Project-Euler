function largestExponential(baseExp) {
  let maximum = 0
  let indexOfMaximum = 0
  for (let i = 1; i < baseExp.length; i++) {
    const curValue = Math.log(baseExp[i][0]) * baseExp[i][1]
    if (curValue > maximum) {
      maximum = curValue
      indexOfMaximum = i
    }
  }

  return baseExp[indexOfMaximum]
}

const testArray1 = [
  [492798, 527927], [30125, 670983], [895603, 504906],
  [450785, 531539], [840237, 507276], [380711, 538522],
  [63577, 625673], [76801, 615157], [502694, 527123]
];

console.log(largestExponential(testArray1)) // [840237, 507276]
