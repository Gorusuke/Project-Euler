# Problem 31: Coin sums

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p). <br>
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p <br>
How many different ways can `n` pence be made using any number of coins?

```javascript
coinSums(50) // 451
coinSums(100) // 4563
coinSums(150) // 21873
coinSums(200) // 73682
```
