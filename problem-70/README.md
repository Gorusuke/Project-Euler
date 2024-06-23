# Problem 70: Totient permutation

Euler's Totient function, ϕ(n) (sometimes called the phi function), is used to determine the number of positive numbers less than or equal to `n` which are relatively prime to `n`. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime to nine, ϕ(9) = 6. The number 1 is considered to be relatively prime to every positive number, so ϕ(1) = 1.

Interestingly, ϕ(87109) = 79180, and it can be seen that 87109 is a permutation of 79180.

Find the value of `n`, 1 < `n` < `limit`, for which ϕ(n) is a permutation of `n` and the ratio n/ϕ(n) produces a minimum.

```javascript
totientPermutation(10000) // 4435
totientPermutation(100000) // 75841
totientPermutation(500000) // 474883
totientPermutation(10000000) // 8319823
```
