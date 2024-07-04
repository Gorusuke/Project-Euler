# Problem 100: Arranged probability

If a box contains twenty-one colored discs, composed of fifteen blue discs and six red discs, and two discs were taken at random, it can be seen that the probability of taking two blue discs.

P(BB) = 15/21 × 14/20 = 1/2
 
The next such arrangement, for which there is exactly a 50% chance of taking two blue discs at random, is a box containing eighty-five blue discs and thirty-five red discs.

By finding the first arrangement to contain over `limit` discs in total, determine the number of blue discs that the box would contain.

```javascript
arrangedProbability(20) // 15
arrangedProbability(100) // 85
arrangedProbability(100000) // 97513
arrangedProbability(1000000000) // 3822685023
arrangedProbability(1000000000000) // 756872327473
```
