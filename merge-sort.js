// ==========
// MERGE SORT
// ==========

// This sorting algorithm is based on the idea that you can merged two perfectly sorted arrays to result into one perfectly sorted array. Merge sort is a fairly quick sorting algorithm, however, efficiency can be lost because it uses more memory than other algorithms like quick sort. 

// ========
// THE CODE
// ========

// This is the main function you will fire to sort an array.
function startTheSort(arr) {
  // Find the middle of the array so we can split it in two.
  let mid = Math.floor(arr.length / 2);

  //   // console logs to break up the code to better visualize what's happening with the recursion. Uncomment to show.
  // console.log('arr:', arr);
  // console.log('............');

  // This is where we check to see if the array has a single element, if it doesn't then the recursion will continue. If it does have a single element, then it will return the array and start the domino effort of resolving each function invocation in the call stack.
  if (arr.length < 2) {
    return arr;
  }

  // This portion of code happens if the array still needs to be divided. Make a copy of the left half of the array and the right half.
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // This is where the recursion is happening. Once all the arrays have been broken up and we have single elements in arrays, the recursion can start resolving itself. When one level is resolved, it can run the merge function and so forth until it's complete.
  return merge(startTheSort(left), startTheSort(right));
}

function merge(left, right) {
  // We know that the parameters passed (left array and right array) are going to be perfectly sorted.

  // This result array is where we're going to be storing the final merged elements from the left and right arrays.
  let result = [];

  // // console logs to break up the code to better visualize what's happening with the recursion Uncomment to show.
  // console.log('left:', left);
  // console.log('right:', right);
  // console.log('-------------');

  // This loop will run as long as there are contents in both the left array and the right array.
  while (left.length && right.length) {
    // Find whatever element is the lesser value, remove it from it's array and push it to the results array.
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  // This code runs when one or both of the left and right arrays are empty. We now know that whatever values are left in one of the arrays are sorted and also greater than so we can add them to the end of the results array.
  result.push(...left, ...right);
  // Return the final merged array.
  return result;
}
