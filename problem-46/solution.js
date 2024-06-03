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

function isSquarePrimeSum(n) {
  for (let i = 1; i <= Math.sqrt(n / 2); i++) {
    if (isPrime(n - 2 * (i ** 2))) return true;
  }
  return false;
}

function goldbachsOtherConjecture() {
  let currNum = 3;
  while (isPrime(currNum) || isSquarePrimeSum(currNum)) {
    currNum += 2;
  }
  return currNum;
}

console.log(goldbachsOtherConjecture()) // 5777
