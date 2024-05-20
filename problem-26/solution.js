function reciprocalCycles(n) {
  let ans = 0

  for (let i = 1; i <= n; i++) {
    const len = cyclesLength(i)
    if (len > ans) {
      ans = len + 1
    }
  }

  return ans;
}

function cyclesLength(n) {
  const seen = {}
  let state = 1

  for (let i = 0; i < 1000; i++) {
    if (seen[state]) return i - seen[state]
    else {
      seen[state] = i
      state = (state * 10) % n
    }
  }
}


// console.log(test(7)) // 

console.log(reciprocalCycles(700)) // 659
console.log(reciprocalCycles(800)) // 743
console.log(reciprocalCycles(900)) // 887
console.log(reciprocalCycles(1000)) // 983
