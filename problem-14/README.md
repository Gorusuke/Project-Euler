# Problem 14: Longest Collatz sequence

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even) <br>
n → 3n + 1 (n is odd) <br>
Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1 <br>
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under the given `limit`, produces the longest chain?

Note: Once the chain starts the terms are allowed to go above `limit`.

```javascript
longestCollatzSequence(14) // 9
longestCollatzSequence(5847) // 3711
longestCollatzSequence(46500) // 35655
longestCollatzSequence(54512) // 52527
longestCollatzSequence(100000) // 77031
longestCollatzSequence(1000000) // 837799
```