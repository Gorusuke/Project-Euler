function getFamilyPath(startPrime, endPrime, familySoFar, maxSum, familySize) {
  let paths = [];
  if (isPrimePair(startPrime, endPrime)) {

    const newFamily = {
      path: [...familySoFar.path, startPrime],
      sum: familySoFar.sum + startPrime
    }
    if (newFamily.path.length < familySize
      && newFamily.sum < maxSum / (familySize - newFamily.path.length)
      && arePrimePairs(newFamily.path)
    ) {
      const startPrimePairs = primesPairMap.get(startPrime);

      for (let i = 0; i < startPrimePairs.length; i++) {
        const pair = startPrimePairs[i];
        if (newFamily.sum + pair > maxSum) {
          i = Infinity;
        } else {
          if (pair === endPrime) {
            paths.push({
              path: [...newFamily.path, endPrime],
              sum: newFamily.sum + endPrime
            })
          } else {
            const recPairs = getFamilyPath(pair, endPrime, newFamily, maxSum, familySize);
            paths = paths.concat(recPairs);
          }
        }
      }
    }
  }
  return paths;
}

function arePrimePairs(primes) {
  for (let a = 0; a < primes.length - 1; a++) {
    for (let b = a + 1; b < primes.length; b++) {
      if (isPrimePair(primes[a], primes[b])) return false;
    }
  }
  return true;
}

function isPrime(n) {
  if (n < 2) return false
  else if (n === 2) return true
  else {
    if (n % 2 === 0) return false
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false
    }
    return true
  }
}

function isPrimePair(a, b) {
  let isPrimePairMap = new Map()
  if (!isPrimePairMap.has(a)) {
    isPrimePairMap.set(a, new Map());
  }

  if (isPrimePairMap.get(a).has(b)) {
    let isPrime;
    if (!isPrime(parseInt(`${a}${b}`))) isPrime = false;
    else isPrime = isPrime(parseInt(`${b}${a}`));

    isPrimePairMap.get(a).set(b, isPrime);
  }
  return isPrimePairMap.get(a).get(b);
}

function getPrevPrime(n) {
  console.log({ n });
  return getNthItem(n - 1);
}

function calculateNthItem(n) {

  let lastPrimeValue = getPrevPrime(n);
  console.log({ lastPrimeValue });
  const sixMod = lastPrimeValue % 6;
  const nextSixMultiple = lastPrimeValue + 6 - sixMod;

  let nextPrime = -1;
  for (let i = nextSixMultiple; nextPrime === -1; i += 6) {
    if (i - 1 !== lastPrimeValue && isPrime(i - 1)) {
      nextPrime = i - 1;
    } else if (isPrime(i + 1)) {
      nextPrime = i + 1;
    }
  }

  return nextPrime;
}

function getNthPrime(n) {
  return getNthItem(n);
}

function getNthItem(n) {
  const items = []
  for (let i = items.length + 1; i <= n; i++) {
    const newItem = calculateNthItem(i);
    console.log({ newItem });
    items.push(newItem);
  }
  console.log({ items });
  return items[n - 1];
}

function primePairSets() {
  const familySize = 5
  const primesPairMap = new Map()
  let minPathSum = Infinity;
  let primeValue = 0;
  for (let primeIndex = 1; primeValue < minPathSum; primeIndex++) {
    primeValue = getNthPrime(primeIndex);
    primesPairMap.set(primeValue, []);
    const newPairs = [];
    let prevPrimeValue = 0;
    for (let prevPrimeIndex = 1; (prevPrimeValue + primeValue) <= minPathSum / (familySize - 2) && prevPrimeIndex < primeIndex; prevPrimeIndex++) {
      prevPrimeValue = getNthPrime(prevPrimeIndex);
      if (isPrimePair(prevPrimeValue, primeValue)) {
        primesPairMap.get(prevPrimeValue).push(primeValue);
        newPairs.push(prevPrimeValue);
      }
    }

    if (newPairs.length >= familySize - 1) {
      const families = newPairs.flatMap(startPrime => {
        return getFamilyPath(startPrime, primeValue, {
          path: [],
          sum: 0
        }, minPathSum, familySize);
      });

      minPathSum = Math.min(minPathSum, families.reduce((min, family) => {
        if (family.path.length === familySize && family.sum < minPathSum) {
          return family.sum;
        }
        return min;
      }, minPathSum));
    }
  }

  return minPathSum;
}

console.log(primePairSets())
