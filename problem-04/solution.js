function largestPalindromeProduct(n) {
  function isPalindrome(num) {
    const numStr = num.toString();
    const reversedNumStr = numStr.split('').reverse().join('');
    return numStr === reversedNumStr;
  }

  const maxNumber = Math.pow(10, n) - 1;
  const minNumber = Math.pow(10, n - 1);

  console.log({ maxNumber, minNumber })

  let largestPalindrome = 0;

  for (let i = maxNumber; i >= minNumber; i--) {
    for (let j = i; j >= minNumber; j--) {
      const product = i * j;
      if (product <= largestPalindrome) {
        // If the product is less than or equal to the current largest palindrome,
        // there's no need to continue checking further since it won't yield a larger palindrome.
        break;
      }
      if (isPalindrome(product) && product > largestPalindrome) {
        largestPalindrome = product;
      }
    }
  }

  return largestPalindrome;
}


console.log(largestPalindromeProduct(2)) // 9009
console.log(largestPalindromeProduct(3)) // 906609
console.log(largestPalindromeProduct(4)) // 99000099

