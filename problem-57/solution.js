function squareRootConvergents(n) {
  let numerator = 3n;
  let denominator = 2n;
  let moreDigitsInNumerator = 0;
  for (let i = 2; i <= n; i++) {
    [numerator, denominator] = [numerator + 2n * denominator, denominator + numerator];
    if (countDigits(numerator) > countDigits(denominator)) moreDigitsInNumerator++;
  }
  return moreDigitsInNumerator;
}

function countDigits(number) {
  let counter = 0;
  while (number > 0) {
    counter++;
    number = number / 10n;
  }
  return counter;
}

console.log(squareRootConvergents(10)) // 1
console.log(squareRootConvergents(100)) // 15
console.log(squareRootConvergents(1000)) // 153
