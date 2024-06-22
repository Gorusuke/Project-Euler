# Problem 69: Totient maximum

Euler's Totient function, ϕ(n) (sometimes called the phi function), is used to determine the number of numbers less than `n` which are relatively prime to `n`. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime to nine, ϕ(9) = 6.


<!-- TABLE HERE -->
| n | Relatively Prime | ϕ(n) | n/ϕ(n) |
| ---- | -------- | -------- | ------- |
| 2 | 1 | 1 | 2 |
| 3 | 1, 2 | 2 | 1.5 |
| 4 | 1, 3 | 2 | 2 |
| 5 | 1, 2, 3, 4 | 4 | 1.25 |
| 6 | 1, 5 | 2 | 3 |
| 7 | 1, 2, 3, 4, 5, 6 | 6 | 1.1666... |
| 8 | 1, 3, 5, 7 | 4 | 2 |
| 9 | 1, 2, 4, 5, 7, 8 | 6 | 1.5 |
| 10 | 1, 3, 7, 9 | 14 | 2.5 |

It can be seen that `n` = 6 produces a maximum n/ϕ(n) for `n` ≤ 10.

Find the value of `n` ≤ `limit` for which  n/ϕ(n) is a maximum.

```javascript
totientMaximum(10) // 6
totientMaximum(10000) // 2310
totientMaximum(500000) // 30030
totientMaximum(1000000) // 510510
```
