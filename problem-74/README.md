# Problem 74: Digit factorial chains

The number 145 is well known for the property that the sum of the factorial of its digits is equal to 145:

1! + 4! + 5!=1 + 24 + 120 = 145
 
Perhaps less well known is 169, in that it produces the longest chain of numbers that link back to 169; it turns out that there are only three such loops that exist:

169 → 363601 → 1454 → 169 <br>
871 → 45361 → 871 <br>
872 → 45362 → 872
 
It is not difficult to prove that EVERY starting number will eventually get stuck in a loop. For example,

69 → 363600 → 1454 → 169 → 363601 (→ 1454) <br>
78 → 45360 → 871 → 45361 (→ 871) <br>
540 → 145 (→ 145)
 
Starting with 69 produces a chain of five non-repeating terms, but the longest non-repeating chain with a starting number below one million is sixty terms.

How many chains, with a starting number below `n`, contain exactly sixty non-repeating terms?

```javascript
digitFactorialChains(2000) // 6
digitFactorialChains(100000) // 42
digitFactorialChains(500000) // 282
digitFactorialChains(1000000) // 402
```
