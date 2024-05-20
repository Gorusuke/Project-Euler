function lexicographicPermutations(n) {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const getFactorials = factorial(9)

  let permutation = "";
  for (let i = 0; i < 10; i++) {
    permutation += digits.splice(Math.floor(n / getFactorials[i]), 1);
    n %= getFactorials[i];
  }
  return Number(permutation);
}

function factorial(n) {
  const factorial = [1];
  for (let i = 1; i <= n; i++) {
    factorial.push(factorial[i - 1] * i);
  }
  return factorial.reverse();
}

console.log(lexicographicPermutations(699999)) // 1938246570
console.log(lexicographicPermutations(899999)) // 2536987410
console.log(lexicographicPermutations(900000)) // 2537014689
console.log(lexicographicPermutations(999999)) // 2783915460
