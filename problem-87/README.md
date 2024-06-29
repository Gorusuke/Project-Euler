# Problem 87: Prime power triples

The smallest number expressible as the sum of a prime square, prime cube, and prime fourth power is `28`. In fact, there are exactly four numbers below fifty that can be expressed in such a way:

28 = 2<sup>2</sup> + 2<sup>3</sup> + 2<sup>4</sup> <br>
33 = 3<sup>2</sup> + 2<sup>3</sup> + 2<sup>4</sup> <br>
49 = 5<sup>2</sup> + 2<sup>3</sup> + 2<sup>4</sup> <br>
47 = 2<sup>2</sup> + 3<sup>3</sup> + 2<sup>4</sup>

How many numbers below `n` can be expressed as the sum of a prime square, prime cube, and prime fourth power?

```javascript
primePowerTriples(50) // 4
primePowerTriples(10035) // 684
primePowerTriples(500000) // 18899
primePowerTriples(5000000) // 138932
primePowerTriples(50000000) // 1097343
```
