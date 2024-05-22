# Problem 43: Sub-string divisibility

The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let  d1 be the  1<sup>st</sup> digit, d<sub>2</sub> be the  2<sup>nd</sup> digit, and so on. In this way, we note the following:

- d<sub>2</sub>d<sub>3</sub>d<sub>4</sub> = 406 is divisible by 2
- d<sub>3</sub>d<sub>4</sub>d<sub>5</sub> = 063 is divisible by 3
- d<sub>4</sub>d<sub>5</sub>d<sub>6</sub> = 635 is divisible by 5
- d<sub>5</sub>d<sub>6</sub>d<sub>7</sub> = 357 is divisible by 7
- d<sub>6</sub>d<sub>7</sub>d<sub>8</sub> = 572 is divisible by 11
- d<sub>7</sub>d<sub>8</sub>d<sub>9</sub> = 728 is divisible by 13
- d<sub>8</sub>d<sub>9</sub>d<sub>10</sub> = 289 is divisible by 17


Find the sum of all 0 to `n` pandigital numbers with sub-strings fulfilling `n - 2` of these divisibility properties.

Note: Pandigital numbers starting with `0` are to be considered in the result.

```javascript
substringDivisibility(5) // 12444480
substringDivisibility(7) // 1099210170
substringDivisibility(8) // 1113342912
substringDivisibility(9) // 16695334890
```
