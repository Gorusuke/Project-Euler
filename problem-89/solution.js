function romanNumerals(roman) {
  const replaces = [
    ['VIIII', 'IX'],
    ['IIII', 'IV'],
    ['LXXXX', 'XC'],
    ['XXXX', 'XL'],
    ['DCCCC', 'CM'],
    ['CCCC', 'CD']
  ]
  const numerals = [...roman]
  let savedChars = 0
  for (let i = 0; i < numerals.length; i++) {
    const charsBefore = numerals[i].length
    for (let j = 0; j < replaces.length; j++) {
      numerals[i] = numerals[i].replace(...replaces[j])
    }
    const charsAfter = numerals[i].length
    savedChars += charsBefore - charsAfter
  }
  return savedChars
}

const testNumerals1 = ['XIIIIII', 'XVI', 'MMMCCLXVIIII', 'XXXXVI', 'MMMMXX', 'CCLI', 'CCCCXX', 'MMMMDCXXXXI', 'DCCCCIIII', 'MXVIIII']
console.log(romanNumerals(testNumerals1)) // 19
