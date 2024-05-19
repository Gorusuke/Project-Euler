function sumAmicableNum(n) {
  function sumDivisors(n) {
    let sum = 1;
    let sqrt = Math.floor(Math.sqrt(n));
    for (let i = 2; i < sqrt; i++) {
      if (n % i === 0) sum += i + n / i;
    }
    if (n % sqrt === 0) sum += sqrt;
    return sum
  }

  let sum = 0;
  for (let i = 1; i < n; i++) {
    let possiblePair = sumDivisors(i);
    if (possiblePair !== i && sumDivisors(possiblePair) === i) sum += i;
  }
  return sum;
}

console.log(sumAmicableNum(1000)) // 504
console.log(sumAmicableNum(2000)) // 2898
console.log(sumAmicableNum(5000)) // 8442
console.log(sumAmicableNum(10000)) // 31626