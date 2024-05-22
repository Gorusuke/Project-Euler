function truncatablePrimes(n) {
  let numTruncatablePrimes = 0;
  let currentNum = 11;
  let sum = 0;
  while (numTruncatablePrimes < n) {
    if (isTruncatePrime(currentNum)) {
      sum += currentNum;
      numTruncatablePrimes++;
    }
    currentNum += 2;
    while (hasEvenDigit(currentNum)) {
      currentNum += 2;
    }
  }
  return sum;
}

function isTruncatePrime(num) {
  if (!isPrime(num)) return false
  for (let i = 10; i <= num; i *= 10) {
    if (!isPrime(num % i)) return false
    if (!isPrime(Math.floor(num / i))) return false
  }
  return true
}

function isPrime(n) {
  if (n < 2) return false
  else if (n === 2) return true
  else {
    if (n % 2 === 0) return false
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false
    }
    return true
  }
}

function hasEvenDigit(n) {
  return n
    .toString()
    .split('')
    .some(digit => digit % 2 === 0 && digit !== '2');
}

console.log(truncatablePrimes(8)) // 1986
console.log(truncatablePrimes(9)) // 5123
console.log(truncatablePrimes(10)) // 8920
console.log(truncatablePrimes(11)) // 748317 
