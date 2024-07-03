# Problem 98: Anagramic squares

By replacing each of the letters in the word CARE with 1, 2, 9, and 6 respectively, we form a square number: 1296 = 36<sup>2</sup>. What is remarkable is that, by using the same digital substitutions, the anagram, RACE, also forms a square number: 9216 = 96<sup>2</sup>. We shall call CARE (and RACE) a square anagram word pair and specify further that leading zeroes are not permitted, neither may a different letter have the same digital value as another letter.

Using the `words` array, find all the square anagram word pairs (a palindromic word is NOT considered to be an anagram of itself).

What is the largest square number formed by any member of such a pair?

Note: All anagrams formed must be contained in the given `words` array.

```javascript
anagramicSquares(['CARE', 'RACE']) // 9216
anagramicSquares(testWords1) // 4761
anagramicSquares(testWords2) // 18769
```
