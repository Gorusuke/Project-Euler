// function sumOfNonAbundantNumbers(n) {
//   const allAbundentNumbers = []
//   for (let i = 2; i <= n; i++) {
//     const divisors = multyplesOfANumber(i)
//     const sumAllDivisors = divisors
//       .slice(0, divisors.length - 1)
//       .reduce((a, b) => a + b, 0)
//     if (sumAllDivisors > i) {
//       allAbundentNumbers.push(i)
//     }
//   }
//   const abundentNumbers = []

//   for (let i = 0; i < allAbundentNumbers.length; i++) {
//     for (let j = i; j < allAbundentNumbers.length; j++) {
//       const abundentSum = allAbundentNumbers[i] + allAbundentNumbers[j]
//       if (abundentSum <= n) {
//         abundentNumbers[abundentSum] = true;
//       }
//       else break;
//     }
//   }

//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     if (!abundentNumbers[i]) sum += i;
//   }

//   return sum;
// }

// function multyplesOfANumber(number) {
//   const multiples = []
//   for (let index = 0; index <= number; index++) {
//     if (number % index === 0) {
//       multiples.push(index)
//     }
//   }

//   return multiples
// }


function abundantCheck(number) {
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      sum += i + +(i !== Math.sqrt(number) && number / i);
    }
  }
  return sum > number;
}

function sumOfNonAbundantNumbers(n) {
  let sum = 0;
  const memo = {};
  let abundantList = [];

  const checkSum = (num, stack, memo) => {
    for (let i = 0; i < stack.length; i += 1) {
      if ((num - stack[i]) in memo) return true;
    }
    return false;
  };

  for (let i = 1; i <= n; i += 1) {
    if (abundantCheck(i)) {
      abundantList.push(i);
      memo[i] = 1;
    }
    if (checkSum(i, abundantList, memo)) continue;
    sum += i;
  }
  return sum;
}

console.log(sumOfNonAbundantNumbers(10000)) // 3731004
console.log(sumOfNonAbundantNumbers(15000)) // 4039939
console.log(sumOfNonAbundantNumbers(20000)) // 4159710
console.log(sumOfNonAbundantNumbers(28123)) // 4179871
