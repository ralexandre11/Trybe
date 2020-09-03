// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let end = str.length - 1;
  for (let ini = 0; ini <= (end/2); ini += 1) {
    console.log(str[ini], str[end]);
    if (str[ini] !== str[end]) {
      return false;
    } 
    end -= 1;
  }
  return true;
}
// console.log(palindrome('arara'))

module.exports = palindrome;
