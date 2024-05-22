# Problem 37: Truncatable primes

The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only `n` (8 ≤ `n` ≤ 11) primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

```javascript
truncatablePrimes(8) // 1986
truncatablePrimes(9) // 5123
truncatablePrimes(10) // 8920
truncatablePrimes(11) // 748317
```
