# Problem 53: Combinatoric selections

There are exactly ten ways of selecting three from five, 12345:

123, 124, 125, 134, 135, 145, 234, 235, 245, and 345 <br>
In combinatorics, we use the notation, $(5 / 3)$ = 10
 
In general, $(n / r)$ = $(n!) / r!(n − r)!$, where r ≤ n, n! = n × (n − 1) ×... × 3 × 2 × 1, and 0! = 1.

It is not until n = 23, that a value exceeds one-million: $(23 / 10)$ = 1144066.

How many, not necessarily distinct, values of $(n / r)$ for  1≤n≤100, are greater than one-million?

```javascript
combinatoricSelections(1000) // 4626
combinatoricSelections(10000) // 4431
combinatoricSelections(100000) // 4255
combinatoricSelections(1000000) // 4075
```
