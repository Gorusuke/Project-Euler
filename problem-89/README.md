# Problem 89: Roman numerals

For a number written in Roman numerals to be considered valid there are basic rules which must be followed. Even though the rules allow some numbers to be expressed in more than one way there is always a best way of writing a particular number.

- Numerals must be arranged in descending order of size.
- M, C, and X cannot be equaled or exceeded by smaller denominations.
- D, L, and V can each only appear once.

In addition to the three rules given above, if subtractive combinations are used then the following four rules must be followed.

- Only one I, X, and C can be used as the leading numeral in part of a subtractive pair.
- I can only be placed before V and X.
- X can only be placed before L and C.
- C can only be placed before D and M.

For example, it would appear that there are at least six ways of writing the number sixteen:

IIIIIIIIIIIIIIII <br>
VIIIIIIIIIII <br>
VVIIIIII <br>
XIIIIII <br>
VVVI <br>
XVI 

However, according to the rules only XIIIIII and XVI are valid, and the last example is considered to be the most efficient, as it uses the least number of numerals.

The array, `roman`, will contain numbers written with valid, but not necessarily minimal, Roman numerals.

Find the number of characters saved by writing each of these in their minimal form.

Note: You can assume that all the Roman numerals in the array contain no more than four consecutive identical units.

```javascript
romanNumerals(testNumerals1) // 19
romanNumerals(testNumerals2) // 743
```
