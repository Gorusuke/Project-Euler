function multiplesOf3Or5(number) {
  let sum = 0
  for (let i = 1; i < number; i++) {
    const isMultipleOf3 = i % 3 === 0
    const isMultipleOf5 = i % 5 === 0
    if (isMultipleOf3 || isMultipleOf5) sum += i
  }
  return sum
}

console.log(multiplesOf3Or5(10)); // 23
console.log(multiplesOf3Or5(49)); // 543
console.log(multiplesOf3Or5(1000)); // 233168
console.log(multiplesOf3Or5(8456)); // 16687353
console.log(multiplesOf3Or5(19564)); // 89301183