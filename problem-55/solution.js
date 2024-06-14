function countLychrelNumbers(num) {
  let count = 0
  for (let i = 1; i <= num; i++) {
    if (isLycherlNumber(i)) count++
  }
  return count;
}

function isLycherlNumber(num) {
  let currentNumber = num
  for (let i = 0; i < 50; i++) {
    const numberReversed = Array.from(currentNumber.toString()).reverse().join('')
    const reverseNumber = parseInt(numberReversed)
    currentNumber += reverseNumber
    if (isPalindrome(currentNumber)) return false
  }
  return true
}

function isPalindrome(input) {
  if (typeof input === 'number') input = `${input}`;
  const limit = Math.floor(input.length / 2);
  for (let i = 0; i < limit; i++) {
    if (input[i] !== input[input.length - i - 1]) return false;
  }
  return true;
}

console.log(countLychrelNumbers(1000)) // 13
console.log(countLychrelNumbers(3243)) // 39
console.log(countLychrelNumbers(5000)) // 76
console.log(countLychrelNumbers(7654)) // 140
console.log(countLychrelNumbers(10000)) // 249
