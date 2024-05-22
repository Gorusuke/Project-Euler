// function digitCancellingFractions() {
//   let numer = 1
//   let denom = 1
//   for (let d = 10; d < 100; d++) {
//     for (let n = 10; n < d; n++) {
//       const n0 = n % 10
//       const n1 = n / 10
//       const d0 = d % 10
//       const d1 = d / 10
//       console.log({ isEqual: n1 === d0, anotherEqual: n0 * d === n * d1 });
//       const isEqual = n1 === d0 && (n0 * d) === (n * d1)
//       const anotherEqual = n0 === d1 && (n1 * d) === (n * d0)
//       if (isEqual || anotherEqual) {
//         numer *= n
//         denom *= d
//       }
//     }
//   }
//   return denom / gcd(numer, denom);
// }

// function gcd(x, y) {
//   // if (x < 0 || y < 0) return
//   while (y !== 0) {
//     const z = x % y;
//     x = y;
//     y = z;
//   }
//   return x;
// }

function simplifyFrac(denom, num) {
  let sDenom = denom, sNum = num;
  for (let i = 2; i < 10; i++) {
    if (sDenom % i === 0 && sNum % i === 0) {
      sDenom /= i;
      sNum /= i;
      i = 2;
    }
  }
  return [sDenom, sNum];
}

function cancelPair(denom, num) {
  const dDigits = [Math.floor(denom / 10), denom % 10];
  const nDigits = [Math.floor(num / 10), num % 10];

  if (dDigits.indexOf(0) > -1)
    return false;
  else if (dDigits[0] === nDigits[0]) {
    return [dDigits[1], nDigits[1]];
  } else if (dDigits[0] === nDigits[1]) {
    return [dDigits[1], nDigits[0]];
  } else if (dDigits[1] === nDigits[0]) {
    return [dDigits[0], nDigits[1]];
  } else if (dDigits[1] === nDigits[1]) {
    return [dDigits[0], nDigits[0]];
  } else {
    return false;
  }
}

function digitCancellingFractions() {
  let finalN = 1;
  let finalD = 1;
  for (let denom = 11; denom < 100; denom++) {
    for (let num = 11; num < denom; num++) {
      const test = cancelPair(denom, num);
      if (!test)
        continue;
      if (num / denom === test[1] / test[0]) {
        finalN *= test[1];
        finalD *= test[0];
      }
    }
  }
  return simplifyFrac(finalD, finalN)[0];
}


console.log(digitCancellingFractions()) // 100
