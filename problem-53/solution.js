function combinatoricSelections(limit) {
  let count = 0
  for (let i = 1; i <= 100; i++) {
    for (let j = 1; j <= i; j++) {
      if (chooseNFromRCount(i, j) > limit) count++
    }
  }
  return count;
}

function factorial(n, div = 1) {
  let factorial = 1;

  for (let i = div + 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

function chooseNFromRCount(n, r) {
  const nMinusR = n - r;
  const small = nMinusR < n ? nMinusR : n;
  const big = r === small ? nMinusR : r;
  return factorial(n, big) / factorial(small);
}

console.log(combinatoricSelections(1000)) // 4626
console.log(combinatoricSelections(10000)) // 4431
console.log(combinatoricSelections(100000)) // 4255
console.log(combinatoricSelections(1000000)) // 4075
