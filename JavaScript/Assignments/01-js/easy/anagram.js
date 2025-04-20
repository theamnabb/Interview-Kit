/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.replace(/\s+/g, '').toLowerCase();
  str2 = str2.replace(/\s+/g, '').toLowerCase();

  if (str1.length !== str2.length) {
    console.log(`❌ Sorry: '${str1}' and '${str2}' are not anagrams.`);
    return false;
  }

  const isAnagram = str1.split('').sort().join('') === str2.split('').sort().join('');

  if (isAnagram) {
    console.log(`✅ Congrats: '${str1}' and '${str2}' are anagrams.`);
  } else {
    console.log(`❌ Sorry: '${str1}' and '${str2}' are not anagrams.`);
  }

  return isAnagram;
}

isAnagram('listen', 'silent'); // true
isAnagram('hello', 'world');   // false

module.exports = isAnagram;
