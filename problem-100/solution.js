function arrangedProbability(limit) {
  let blue = 15
  let discs = 21

  while (discs < limit) {
    const nextBlue = 3 * blue + 2 * discs - 2
    const nextDiscs = 4 * blue + 3 * discs - 3
    blue = nextBlue
    discs = nextDiscs
  }
  return blue
}

console.log(arrangedProbability(20)) // 15
console.log(arrangedProbability(100)) // 85
console.log(arrangedProbability(100000)) // 97513
console.log(arrangedProbability(1000000000)) // 3822685023
console.log(arrangedProbability(1000000000000)) // 756872327473
