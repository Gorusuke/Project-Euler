function champernownesConstant(n) {
  let strinNumbers = ''
  let sum = 1
  for (let i = 1; i < n; i++) {
    strinNumbers += i
  }
  for (let i = 0; i <= n.toString().length - 1; i++) {
    const number = Number(strinNumbers[Math.pow(10, i) - 1])
    sum *= number
  }

  return sum;
}

console.log(champernownesConstant(100)) // 5
console.log(champernownesConstant(1000)) // 15
console.log(champernownesConstant(1000000)) // 210
