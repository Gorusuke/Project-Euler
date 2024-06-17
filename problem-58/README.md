# Problem 58: Spiral primes

Starting with 1 and spiralling anticlockwise in the following way, a square spiral with side length 7 is formed.

`37` 36 35 34 33 32 `31` <br>
38 `17` 16 15 14 `13` 30 <br>
39 18 `05` 04 `03` 12 29 <br>
40 19 06 01 02 11 28 <br>
41 20 `07` 08 09 10 27 <br>
42 21 22 23 24 25 26 <br>
`43` 44 45 46 47 48 49 <br>
It is interesting to note that the odd squares lie along the bottom right diagonal, but what is more interesting is that 8 out of the 13 numbers lying along both diagonals are prime; that is, a ratio of 8/13 ≈ 62%.

If one complete new layer is wrapped around the spiral above, a square spiral with side length 9 will be formed. If this process is continued, what is the side length of the square spiral for which the percent of primes along both diagonals first falls below `percent`?

```javascript
spiralPrimes(50) // 11
spiralPrimes(15) // 981
spiralPrimes(10) // 26241
```
