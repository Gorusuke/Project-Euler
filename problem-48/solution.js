function powerLastDigits(num, mask) {
  let lastDigits = 1;
  for (let i = 0; i < num; i++) {
    lastDigits = (lastDigits * num) % mask;
  }
  return lastDigits;
}

function selfPowers(power, lastDigits) {
  let sum = 0;
  const mask = Math.pow(10, lastDigits);
  for (let i = 1; i <= power; i++) {
    sum = (sum + powerLastDigits(i, mask)) % mask;
  }
  return sum;
}

console.log(selfPowers(10, 3)) // 317
console.log(selfPowers(150, 6)) // 29045
console.log(selfPowers(673, 7)) // 2473989
console.log(selfPowers(1000, 10)) // 9110846700
