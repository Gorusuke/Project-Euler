function circularPrimes(n) {
  let sum = 0
  for (let i = 2; i < n; i++) {
    if (isCircularPrime(i)) sum++
  }
  return sum;
}

function isCircularPrime(n) {
  const stringNumber = n.toString()
  const numbers = []
  for (let i = 0; i < stringNumber.length; i++) {
    const allCombinations = Number(stringNumber.substring(i) + stringNumber.substring(0, i))
    numbers.push(allCombinations)
  }
  return numbers.every(x => isPrime(x))
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

console.log(circularPrimes(100)) // 13
console.log(circularPrimes(100000)) // 43
console.log(circularPrimes(250000)) // 45
console.log(circularPrimes(500000)) // 49
console.log(circularPrimes(750000)) // 49
console.log(circularPrimes(1000000)) // 55
