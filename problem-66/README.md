# Problem 66: Diophantine equation

Consider quadratic Diophantine equations of the form:

x<sup>2</sup> – Dy<sup>2</sup> = 1 <br>
For example, when D = 13, the minimal solution in x is 649<sup>2</sup> – 13×180<sup>2</sup> = 1.

It can be assumed that there are no solutions in positive integers when D is square.

By finding minimal solutions in x for D = {2, 3, 5, 6, 7}, we obtain the following:

3<sup>2</sup> – 2×2<sup>2</sup> = 1 <br>
2<sup>2</sup> – 3×1<sup>2</sup> = 1 <br>
9<sup>2</sup> – 5×4<sup>2</sup> = 1 <br>
5<sup>2</sup> – 6×2<sup>2</sup> = 1 <br>
8<sup>2</sup> – 7×3<sup>2</sup> = 1 <br>
Hence, by considering minimal solutions in `x` for D ≤ 7, the largest `x` is obtained when D=5.

Find the value of D ≤ `n` in minimal solutions of `x` for which the largest value of `x` is obtained.

```javascript
diophantineEquation(7) // 5
diophantineEquation(100) // 61
diophantineEquation(409) // 409
diophantineEquation(500) // 421
diophantineEquation(1000) // 661
```
