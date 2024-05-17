function longestCollatzSequence(limit) {
  const collatz = (num) => {
    const result = [num]
    while (num > 1) {
      if (num % 2 === 1) {
        num = (num * 3) + 1
        result.push(num)
      }
      num = num / 2
      result.push(num)
    }
    return result
  }

  let length = 0
  let number = 0

  for (let idx = 1; idx <= limit; idx++) {
    const result = collatz(idx)
    if (result.length > length) {
      length = result.length
      number = idx
    }
  }
  return number;
}


console.log(longestCollatzSequence(14)) // 9
console.log(longestCollatzSequence(5847)) // 3711
console.log(longestCollatzSequence(46500)) // 35655
console.log(longestCollatzSequence(54512)) // 52527
console.log(longestCollatzSequence(100000)) // 77031
console.log(longestCollatzSequence(1000000)) // 837799