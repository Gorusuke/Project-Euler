// function divisibleTriangleNumber(n) {
//   let totalSum = 0
//   let result = []
//   for (let idx = 1; idx < BigInt(Math.pow(n, 3)); idx++) {
//     totalSum += idx
//     result = multyplesOfANumber(totalSum)
//     if (result.length > n) return result.at(-1)
//   }
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


function divisibleTriangleNumber(n) {
  let i = 1;
  let triangleNumber = i;

  while (numOfDivisors(triangleNumber) < n) {
    i += 1;
    triangleNumber += i;
  }
  return triangleNumber;
}

function numOfDivisors(n) {
  let count = 0;
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) count += 2;
  }
  if (n % Math.sqrt(n) === 0) count += 1;

  return count;
}

console.log(divisibleTriangleNumber(5)) // 28
console.log(divisibleTriangleNumber(23)) // 630
console.log(divisibleTriangleNumber(167)) // 1385280
console.log(divisibleTriangleNumber(374)) // 17907120
console.log(divisibleTriangleNumber(500)) // 76576500