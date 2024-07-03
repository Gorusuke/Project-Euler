# Problem 99: Largest exponential
Comparing two numbers written in index form like 2<sup>11</sup> and 3<sup>7</sup> is not difficult, as any calculator would confirm that 2<sup>11</sup> = 2048 < 3<sup>7</sup> = 2187.

However, confirming that  632382<sup>518061</sup> < 519432<sup>525806</sup> would be much more difficult, as both numbers contain over three million digits.

Using the 2D `baseExp` array of base/exponent pairs, determine pair with the greatest numerical value and return it.

```javascript
largestExponential(testArray1) // [840237, 507276]
largestExponential(testArray2) // [895447, 504922]
```
