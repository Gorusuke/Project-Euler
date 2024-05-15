function fiboEvenSum(n) {
  const numbersArray = [1, 2]
  for (let i = 2; i <= n; i++) {
    const newValue = numbersArray[i - 1] + numbersArray[i - 2]
    numbersArray.push(newValue)
  }
  const totalSum = numbersArray
    .filter((num) => num <= n && num % 2 === 0)
    .reduce((a, b) => a + b, 0)
  return totalSum
}

console.log(fiboEvenSum(8)) // 10
console.log(fiboEvenSum(10)) // 10
console.log(fiboEvenSum(34)) // 44
console.log(fiboEvenSum(60)) // 44
console.log(fiboEvenSum(1000)) // 798
console.log(fiboEvenSum(100000)) // 60696
console.log(fiboEvenSum(4000000)) // 4613732