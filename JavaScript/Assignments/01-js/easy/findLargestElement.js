/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    let arrNumSort = numbers.sort();
    let findLargest = Math.max(...arrNumSort)
    console.log(`The largest element is: ${findLargest}`);
}
findLargestElement([3, 7, 2, 9, 1]); // Output: 9

module.exports = findLargestElement;