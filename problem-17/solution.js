function numberLetterCounts(limit) {
  let allNumbersLetters = ''
  for (let i = 1; i <= limit; i++) {
    const numbersToWords = convertNumberToWords(i)
    allNumbersLetters += numbersToWords + ''
  }
  return allNumbersLetters.replaceAll(/-|\s/g, '').length;
}

function convertNumberToWords(number) {
  const numbersToWords = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  };

  if (numbersToWords[number]) return numbersToWords[number];

  let words = "";

  if (number >= 1000) {
    words += `${convertNumberToWords(Math.floor(number / 1000))} thousand`
    number %= 1000;
  }

  if (number >= 100) {
    if (words !== "") words += ' '
    words += `${convertNumberToWords(Math.floor(number / 100))} hundred`;
    number %= 100;
  }

  if (number > 0) {
    if (words !== "") words += " and ";
    if (number < 20) words += numbersToWords[number];
    else {
      words += numbersToWords[Math.floor(number / 10) * 10];
      number %= 10
      if (number) words += `-${numbersToWords[number]}`;
    }
  }

  return words;
}


console.log(numberLetterCounts(5)) // 19
console.log(numberLetterCounts(150)) // 1903
console.log(numberLetterCounts(1000)) // 21124