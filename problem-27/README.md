# Problem 27: Quadratic primes

Euler discovered the remarkable quadratic formula:

n<sup>2</sup>+n+41
 
It turns out that the formula will produce 40 primes for the consecutive integer values  0 ≤ n ≤ 39. However, when  n = 40, 40<sup>2</sup> + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and certainly when  n = 41, 41<sup>2</sup> + 41 + 41 is clearly divisible by 41.

The incredible formula n<sup>2</sup> − 79n + 1601 was discovered, which produces 80 primes for the consecutive values 0 ≤ n ≤ 79. The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n<sup>2</sup> + an + b, where |a| < range and |b| ≤ range
where |n| is the modulus/absolute value of n 
e.g. |11| = 11 and |−4| = 4
 
Find the product of the coefficients, *a* and *b*, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.

```javascript
quadraticPrimes(200) // -4925
quadraticPrimes(500) // -18901
quadraticPrimes(800) // -43835
quadraticPrimes(1000) // -59231
```
