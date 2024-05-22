// function pandigitalProducts(n) {
//   function isPandigital(str) {
//     if (str.length !== n) return false
//     const stringNumbers = Array.from({ length: n }).map((_, idx) => idx + 1)
//     const temp = [...str].sort()
//     return stringNumbers.every(x => temp.includes(x.toString()))
//   }

//   function hasPandigital(i) {
//     for (let j = 1; j <= i; j++) {
//       const str = '' + i + j + i / j
//       if (i % j === 0 && isPandigital(str)) return true
//     }
//     return false
//   }

//   let sum = 0
//   for (let i = 1; i < 10000; i++) {
//     if (hasPandigital(i)) sum += i
//   }
//   return sum;
// }

function pandigitalProducts(n) {
  function is1toNPandigital(n, digitStr) {
    if (digitStr.length !== n) return false;

    for (let i = digitStr.length; i > 0; i--) {
      if (digitStr.indexOf(i.toString()) === -1) return false;
    }
    return true;
  }

  function concatenateNums(...numbers) {
    let digitStr = '';
    for (let i = 0; i < numbers.length; i++) digitStr += numbers[i].toString();
    return digitStr;
  }

  const pandigitalNums = [];
  const limit = 10 ** Math.floor(n / 2) - 1;
  let sum = 0;
  for (let mult1 = 2; mult1 < limit; mult1++) {
    for (let mult2 = 2; mult2 < limit; mult2++) {
      const product = mult1 * mult2;
      const concatenated = concatenateNums(mult1, mult2, product);
      if (concatenated.length > n) break;
      else if (concatenated.length < n) continue;
      if (
        is1toNPandigital(n, concatenated) &&
        !pandigitalNums.includes(product)
      ) {
        pandigitalNums.push(product);
        sum += product;
      }
    }
  }
  return sum;
}

console.log(pandigitalProducts(4)) // 12
console.log(pandigitalProducts(6)) // 162
console.log(pandigitalProducts(7)) // 0
console.log(pandigitalProducts(8)) // 13458
console.log(pandigitalProducts(9)) // 45228
