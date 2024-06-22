function magic5GonRing() {
  let state = Array.from({ length: 10 }).map((x, i) => i)
  for (let i = 0; i < state.length; i++) {
    state[i] = i + 1
  }

  let max = null
  do {
    let sum = state[0] + state[5] + state[6];
    if (state[1] + state[6] + state[7] != sum ||
      state[2] + state[7] + state[8] != sum ||
      state[3] + state[8] + state[9] != sum ||
      state[4] + state[9] + state[5] != sum
    ) continue

    let minOuterIndex = -1
    let minOuter = Number.MAX_VALUE
    for (let i = 0; i < 5; i++) {
      if (state[i] < minOuter) {
        minOuterIndex = i
        minOuter = state[i]
      }
    }

    let s = ""
    for (let i = 0; i < 5; i++) {
      s += "" + state[(minOuterIndex + i) % 5] + state[(minOuterIndex + i) % 5 + 5] + state[(minOuterIndex + i + 1) % 5 + 5]
    }
    if (s.length == 16 && (max == null || compareTo(s, max) > 0)) max = s
  } while (nextPermutation(state))

  if (max === null) return 'Error'
  return Number(max)
}

function compareTo(a, b) {
  if (a < b) return -1
  else if (a > b) return 1
  return 0
}

function nextPermutation(arr) {
  let i = arr.length - 1;
  for (; i > 0 && arr[i - 1] >= arr[i]; i--);
  if (i <= 0) return false;
  {
    let j = arr.length - 1;
    for (; arr[j] <= arr[i - 1]; j--);
    let temp = arr[i - 1];
    arr[i - 1] = arr[j];
    arr[j] = temp;
  }
  for (let j = arr.length - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return true;
}

console.log(magic5GonRing()) // 6531031914842725
