function doubleBasePalindromes(n) {
  let sum = 0
  for (let i = 0; i <= n; i++) {
    const number = i.toString()
    const numberBase2 = i.toString(2)
    if (isPalindrome(number) && isPalindrome(numberBase2)) sum += i
  }
  return sum;
}

function isPalindrome(num) {
  const reversedNumStr = num.split('').reverse().join('');
  return num === reversedNumStr;
}

console.log(doubleBasePalindromes(1000)) // 1772
console.log(doubleBasePalindromes(50000)) // 105795
console.log(doubleBasePalindromes(500000)) // 286602
console.log(doubleBasePalindromes(1000000)) // 872187 
