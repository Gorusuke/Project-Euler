function factorial(n) {
  const factorial = [1];
  for (let i = 1; i <= 9; i++) {
    const number = factorial[i - 1]
    factorial.push(number * i);
  }

  return factorial[n];
}

function digitFactorial() {
  const result = { 'sum': 0, 'numbers': [] };
  const max = 2177282;
  for (let i = 10; i <= max; i++) {
    const factorialSum = i
      .toString()
      .split("")
      .reduce((sum, digit) => sum + factorial(digit), 0);

    if (factorialSum === i) {
      result['sum'] += i;
      result['numbers'].push(i);
    }
  }
  return result;
}

console.log(digitFactorial()) // {sum: 40730, numbers: [145, 40585]}
