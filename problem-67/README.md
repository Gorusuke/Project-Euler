# Problem 67: Maximum path sum II

By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

   3 <br>
  7 4 <br>
 2 4 6 <br>
8 5 9 3 <br>
That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom in `numTriangle`, a 2D array defined in the background containing a triangle with one-hundred rows.

**Note:** This is a much more difficult version of Problem 18. It is not possible to try every route to solve this problem, as there are 2<sup>99</sup> altogether! If you could check one trillion (10<sup>12</sup>) routes every second it would take over twenty billion years to check them all. There is an efficient algorithm to solve it. ;o)

```javascript
maximumPathSumII([[3, 0, 0, 0],[7, 4, 0, 0],[2, 4, 6, 0],[8, 5, 9, 3]]) // 23
maximumPathSumII(numTriangle) // 7273
```
