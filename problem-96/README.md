# Problem 96: Su Doku

Su Doku (Japanese meaning number place) is the name given to a popular puzzle concept. Its origin is unclear, but credit must be attributed to Leonhard Euler who invented a similar, and much more difficult, puzzle idea called Latin Squares. The objective of Su Doku puzzles, however, is to replace the blanks (or zeros) in a 9 by 9 grid in such that each row, column, and 3 by 3 box contains each of the digits 1 to 9. Below is an example of a typical starting puzzle grid and its solution grid.

![gdfgggdfg](https://github.com/Gorusuke/Project-Euler/assets/64686153/4107ee2f-968b-4a5e-ba79-61e090e2d38a)

A well constructed Su Doku puzzle has a unique solution and can be solved by logic, although it may be necessary to employ "guess and test" methods in order to eliminate options (there is much contested opinion over this). The complexity of the search determines the difficulty of the puzzle; the example above is considered easy because it can be solved by straight forward direct deduction.

The puzzlesArr array contains different Su Doku puzzle strings ranging in difficulty, but all with unique solutions.

By solving all puzzles in puzzlesArr, find the sum of the 3-digit numbers found in the top left corner of each solution grid; for example, 483 is the 3-digit number found in the top left corner of the solution grid above.

```javascript
suDoku(testPuzzles1) // 1190
suDoku(testPuzzles2) // 24702
```
