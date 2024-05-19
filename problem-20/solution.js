function sumFactorialDigits(n) {
  function factorial(number) {
    let factorial = BigInt(1)
    for (let i = 1; i <= number; i++) {
      factorial *= BigInt(i)
    }
    return factorial;
  }
  const factorialNumber = factorial(n)
  let num = 0
  for (let idx = 0; idx < factorialNumber.toString().length; idx++) {
    num += Number(factorialNumber.toString()[idx]);
  }
  return num
}

console.log(sumFactorialDigits(10)) // 27
console.log(sumFactorialDigits(25)) // 72
console.log(sumFactorialDigits(50)) // 216
console.log(sumFactorialDigits(75)) // 432
console.log(sumFactorialDigits(100)) // 648