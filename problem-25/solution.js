function digitFibonacci(n) {
  const fibonacciSequence = fibonacci(100)
  let index = 0
  for (let idx = 0; idx < fibonacciSequence.length; idx++) {
    const number = fibonacciSequence[idx];
    if (number.toString().length === n) {
      index = idx + 1
      idx = fibonacciSequence.length
    }
  }
  return index;
}

function fibonacci(n) {
  const fibonacciNumbers = [1, 1]
  for (let i = 2; i < n; i++) {
    const firstNumber = fibonacciNumbers[i - 2];
    const secondNumber = fibonacciNumbers[i - 1];
    fibonacciNumbers.push(firstNumber + secondNumber)
  }
  return fibonacciNumbers
}

// console.log(fibonacci(100)) // 21

console.log(digitFibonacci(5)) // 21
console.log(digitFibonacci(10)) // 45
console.log(digitFibonacci(15)) // 69
console.log(digitFibonacci(20)) // 93
