function amicableChains(limit) {
  function getSmallestMember(chain) {
    let smallest = chain[0]
    for (let i = 1; i < chain.length; i++) {
      if (smallest > chain[i]) smallest = chain[i]
    }
    return smallest
  }

  function getFactorsSums(limit) {
    const factorsSums = new Array(limit + 1).fill(1)
    for (let i = 2; i <= limit / 2; i++) {
      for (let j = 2 * i; j <= limit; j += i) {
        factorsSums[j] += i
      }
    }
    return factorsSums
  }

  const factorsSums = getFactorsSums(limit)
  const checkedNumbers = new Set()
  let longestChain = 0
  let smallestMember = 0
  for (let i = 0; i <= limit; i++) {
    const curChain = []
    let curNumber = i
    while (!checkedNumbers.has(curNumber) && factorsSums[curNumber] <= limit) {
      curNumber = factorsSums[curNumber]
      const chainStart = curChain.indexOf(curNumber);
      if (chainStart === -1) {
        curChain.push(curNumber)
        continue
      }

      const chainLength = curChain.length - chainStart
      if (chainLength > longestChain) {
        longestChain = chainLength
        smallestMember = getSmallestMember(curChain.slice(chainStart))
      }
      break
    }

    for (let j = 0; j < curChain.length; j++) {
      checkedNumbers.add(curChain[j])
    }
  }

  return smallestMember
}

console.log(amicableChains(300)) // 220
console.log(amicableChains(15000)) // 220
console.log(amicableChains(100000)) // 12496
console.log(amicableChains(1000000)) // 14316
