# Problem 97: Large non-Mersenne prime

The first known prime found to exceed one million digits was discovered in 1999, and is a Mersenne prime of the form 2<sup>6972593</sup> − 1; it contains exactly 2,098,960 digits. Subsequently other Mersenne primes, of the form 2<sup>p</sup> − 1, have been found which contain more digits.

However, in 2004 there was found a massive non-Mersenne prime which contains 2,357,207 digits: 28433 × 2<sup>7830457</sup> + 1.

Find the last ten digits of that non-Mersenne prime in the form multiplier × 2<sup>power</sup> + 1.

```javascript
largeNonMersennePrime(19, 6833086) // '3637590017'
largeNonMersennePrime(27, 7046834) // '0130771969'
largeNonMersennePrime(6679881, 6679881) // '4455386113'
largeNonMersennePrime(28433, 7830457) // '8739992577'
```
