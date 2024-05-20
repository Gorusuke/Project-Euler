# Problem 30: Digit n powers

Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 1<sup>4</sup> + 6<sup>4</sup> + 3<sup>4</sup> + 4<sup>4</sup> <br>
8208 = 8<sup>4</sup> + 2<sup>4</sup> + 0<sup>4</sup> + 8<sup>4</sup> <br>
9474 = 9<sup>4</sup> + 4<sup>4</sup> + 7<sup>4</sup> + 4<sup>4</sup> <br>
As 1 = 1<sup>4</sup> is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of `n` powers of their digits.

```javascript
digitnPowers(2) // 0
digitnPowers(3) // 1301
digitnPowers(4) // 19316
digitnPowers(5) // 443839
```
