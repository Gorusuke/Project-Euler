function powerfulDigitSum(n) {
  let max = 1n;
  for (let a = 2n; a < n; a++) {
    for (let b = 1n; b < n; b++) {
      const result = digitSum(a, b)
      if (result > max) max = result
    }
  }
  return parseInt(max, 10);
}

function digitSum(a, b) {
  const pow = a ** b;
  let sum = 0n;
  for (let i = 0; i < pow.toString().length; i++) {
    sum += BigInt(pow.toString()[i]);
  }
  return sum;
}

console.log(powerfulDigitSum(3)) // 4
console.log(powerfulDigitSum(10)) // 45
console.log(powerfulDigitSum(50)) // 406
console.log(powerfulDigitSum(75)) // 684
console.log(powerfulDigitSum(100)) // 972
