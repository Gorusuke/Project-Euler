function largestPrimeFactor(number) {
  let factor = 2; // Start with the smallest prime factor
  let largestFactor = 0;

  // Keep dividing number by factor until it's no longer divisible by it
  while (number > 1) {
    if (number % factor === 0) {
      largestFactor = factor;

      // Divide number by the factor as many times as possible to get 1
      while (number % factor === 0) {
        number /= factor;
      }
    }
    // Move to the next prime number
    factor++;
  }
  return largestFactor;
}

console.log(largestPrimeFactor(2)) // 2
console.log(largestPrimeFactor(3)) // 3
console.log(largestPrimeFactor(5)) // 5
console.log(largestPrimeFactor(7)) // 7
console.log(largestPrimeFactor(8)) // 2
console.log(largestPrimeFactor(13195)) // 29
console.log(largestPrimeFactor(600851475143)) // 6857