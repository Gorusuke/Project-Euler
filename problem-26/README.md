# Problem 26: Reciprocal cycles

A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2 = 0.5 <br>
1/3 = 0.(3) <br>
1/4 = 0.25 <br>
1/5 = 0.2 <br>
1/6 = 0.1(6) <br>
1/7 = 0.(142857) <br>
1/8 = 0.125 <br>
1/9 = 0.(1) <br>
1/10 = 0.1 <br>
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of `d` < `n` for which 1/d contains the longest recurring cycle in its decimal fraction part.

```javascript
reciprocalCycles(700) // 659
reciprocalCycles(800) // 743
reciprocalCycles(900) // 887
reciprocalCycles(1000) // 983
```
