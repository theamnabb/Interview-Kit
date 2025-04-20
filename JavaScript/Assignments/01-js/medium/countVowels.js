/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// function countVowels(str) {
//   const lowerStr = str.toLowerCase();
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;

//   for (let i of lowerStr) {
//       if (vowels.includes(i)) {
//           count++;
//       }
//   }

//   console.log(`The string "${str}" contains ${count} vowels.`);
//   return count;
// }

// countVowels("Hello World");

// 📌 Second method 

function countVowels(str) {
  let normalizedStr = str.toLowerCase().split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  
  let vowelArray = normalizedStr.filter(char => vowels.includes(char));
  let count = vowelArray.length;
  console.log(`The string "${str}" contains ${count} vowels.`);
  return count;
}
countVowels("Hello AaMna"); 



module.exports = countVowels;