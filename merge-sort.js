// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less

    if (arr.length <= 1) {
      // If so, it's already sorted: return
      return arr;
  }

  // Divide the array in half
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  // Recursively sort the left half
  // Recursively sort the right half

  // Merge the halves together and return
  return merge(mergeSort(leftArr), mergeSort(rightArr));



}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array

  // Point to the first value of each array
  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the return array

  const result = [];

  while (arrA.length && arrB.length) {
      if (arrA[0] <= arrB[0]) {
          result.push(arrA.shift());
      } else {
          result.push(arrB.shift());
      }
  }

  return [...result, ...arrA, ...arrB];

}

module.exports = [merge, mergeSort];
