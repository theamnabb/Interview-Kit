/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

// function findLargestElement(numbers) {

//     let arrNumSort = numbers.sort();
//     let findLargest = Math.max(...arrNumSort)
//     console.log(`The largest element is: ${findLargest}`);
// }
// findLargestElement([3, 7, 2, 9, 1]); // Output: 9

// 2nd method by using reduce
function findLargestElement(numbers) {
    let max = numbers.reduce((acc, curr) => {
      return acc > curr ? acc : curr;
    });
  
    console.log(`The largest element is: ${max}`);
    return max;
  }
findLargestElement([3, 7, 2, 9, 1]); // Output: 9

module.exports = findLargestElement;