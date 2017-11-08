// ===========
// BUBBLE SORT
// ===========

// This sorting algorithm will iterate through the array looking at two items at a time and comparing their values. If they are out of order, they will swap and then the next two will be compared. This algorithm in worst case scenario is very inefficient. However, with nearly sorted arrays, this algorithm really shines.

// ========
// THE CODE
// ========

// This is the main function you will fire to sort an array.
function bubbleSort(arr) {
  // We need a way to check if any of the elements were swapped. If they weren't and change stays false, we can break the do while loop and will know that our array is sorted.
  let change = false;
  // This count lets us keep our algorithm more efficient. If we make one iteration, we know that the last element in the array is in the correct location and we no longer need to iterate over that portion of the array. We do so by minusing the count (which comes from how many iterations we've made) from the array length to know how far our for loop should go.
  let count = 1;
  do {
    // This resets our change variable back to false otherwise we would have an infinite loop because change will never go back to false to stop the do while loop
    change = false;
    for (var i = 0; i < arr.length - count; i++) {
      // This compares the value with the next value, if they are out of order, swap them!
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        // A swap has happened so change is set to true to continue the do while loop
        change = true;
      }
    }
    // This is incremented after every for loop so we keep our algorithm more efficient.
    count++;
  } while (change);
}

// The function to swap all the things :)
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}