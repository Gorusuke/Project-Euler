function countingFractionsInARange(limit) {
  let result = 0;
  const stack = [[3, 2]];
  while (stack.length > 0) {
    const [startDenominator, endDenominator] = stack.pop();
    const curDenominator = startDenominator + endDenominator;
    if (curDenominator <= limit) {
      result++;
      stack.push([startDenominator, curDenominator]);
      stack.push([curDenominator, endDenominator]);
    }
  }
  return result;
}

console.log(countingFractionsInARange(8)) // 3
console.log(countingFractionsInARange(1000)) // 50695
console.log(countingFractionsInARange(6000)) // 1823861
console.log(countingFractionsInARange(12000)) // 7295372
