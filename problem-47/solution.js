const NUMFACTORS = Array(150000).fill(0);
function initFactors(num) {
  for (let i = 2; i < num; i++) {
    if (NUMFACTORS[i] === 0) {
      for (let j = i; j < num; j += i) {
        NUMFACTORS[j]++;
      }
    }
  }
}
initFactors(150000);

function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
  let numConsecutive = 0;
  let currNumber = 10;
  while (numConsecutive < targetConsecutive) {
    if (NUMFACTORS[currNumber] === targetNumPrimes) numConsecutive++;
    else numConsecutive = 0;
    currNumber++;
  }
  return currNumber - targetConsecutive;
}

console.log(distinctPrimeFactors(2, 2)) // 14
console.log(distinctPrimeFactors(3, 3)) // 644
console.log(distinctPrimeFactors(4, 4)) // 134043
