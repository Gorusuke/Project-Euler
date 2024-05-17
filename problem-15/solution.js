function latticePaths(gridSize) {
  function factorial(n) {
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }

  const firstFactorial = factorial(2 * gridSize)
  const SecondFactorial = (factorial(gridSize)) ** 2
  return firstFactorial / SecondFactorial
}

console.log(latticePaths(4)) // 70
console.log(latticePaths(9)) // 48620
console.log(latticePaths(20)) // 137846528820