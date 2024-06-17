# Problem 57: Square root convergents

It is possible to show that the square root of two can be expressed as an infinite continued fraction.

2–√=1+12+12+12+…
 
By expanding this for the first four iterations, we get:

1+12= 3/2 = 1.5
 
1+12+12= 7/5 = 1.4
 
1+12+12+12= 17/12 = 1.41666…
 
1+12+12+12+12= 41/29 = 1.41379…
 
The next three expansions are  99/70,  239/169, and  577/408, but the eighth expansion,  1393/985, is the first example where the number of digits in the numerator exceeds the number of digits in the denominator.

In the first `n` expansions, how many fractions contain a numerator with more digits than denominator?

```javascript
squareRootConvergents(10) // 1
squareRootConvergents(100) // 15
squareRootConvergents(1000) // 153
```
