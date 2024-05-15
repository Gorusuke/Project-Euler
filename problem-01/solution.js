function multiplesOf3Or5(number) {
  const arr = []
  for (let i = 1; i < number; i++) {
    const isMultipleOf3 = i % 3 === 0
    const isMultipleOf5 = i % 5 === 0
    if (isMultipleOf3 || isMultipleOf5) arr.push(i)
  }
  return arr.reduce((a, b) => a + b, 0);
}

console.log(multiplesOf3Or5(10)); // 23
console.log(multiplesOf3Or5(49)); // 543
console.log(multiplesOf3Or5(1000)); // 233168
console.log(multiplesOf3Or5(8456)); // 16687353
console.log(multiplesOf3Or5(19564)); // 89301183