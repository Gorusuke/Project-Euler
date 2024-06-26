# Problem 92: Square digit chains

A number chain is created by continuously adding the square of the digits in a number to form a new number until it has been seen before.

For example,

44 → 32 → 13 → 10 → 1 → 1 <br>
85 → 89 → 145 → 42 → 20 → 4 → 16 → 37 → 58 → 89
 
Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop. What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.

How many starting numbers below `limit` will arrive at 89?

```javascript
squareDigitChains(100) // 80
squareDigitChains(1000) // 857
squareDigitChains(100000) // 85623
squareDigitChains(10000000) // 8581146
```
