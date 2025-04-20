/*
  Implement a function `isPalindrome` which takes a string as argument and returns t  rue/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let reversedStr = str.split('').reverse().join('');

  if (reversedStr.toLowerCase() !== str.toLowerCase()) {
    console.log(`"${str}" is NOT a palindrome.`);
    return false;
  }

  console.log(`"${str}" is a palindrome.`);
  return true;
}

isPalindrome("Nan");

module.exports = isPalindrome;
