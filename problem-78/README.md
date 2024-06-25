# Problem 78: Coin partitions

Let p(n) represent the number of different ways in which `n` coins can be separated into piles. For example, five coins can be separated into piles in exactly seven different ways, so p(5) = 7.

| Coin piles |
| ---------- |
| OOOOO |
| OOOO   O |
| OOO   OO |
| OOO   O   O |
| OO   OO   O |
| OO   O   O   O |
| O   O   O   O   O |

Find the least value of `n` for which p(n) is divisible by `divisor`.

```javascript
coinPartitions(7) // 5
coinPartitions(10000) // 599
coinPartitions(100000) // 11224
coinPartitions(1000000) // 55374
```
