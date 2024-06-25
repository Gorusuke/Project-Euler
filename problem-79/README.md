# Problem 79: Passcode derivation

A common security method used for online banking is to ask the user for three random characters from a passcode. For example, if the passcode was `531278`, they may ask for the 2nd, 3rd, and 5th characters; the expected reply would be: `317`.

The arrays, `keylog1`, `keylog2`, and `keylog3`, contains fifty successful login attempts.

Given that the three characters are always asked for in order, analyze the array so as to determine the shortest possible secret passcode of unknown length.

```javascript
passcodeDerivation(keylog1) // 531278
passcodeDerivation(keylog2) // 1230567
passcodeDerivation(keylog3) // 73162890
```
