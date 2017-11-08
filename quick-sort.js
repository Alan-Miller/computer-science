// ==========
// QUICK SORT
// ==========
// Quick sort can be a very efficient algorithm. Quick sort has 3 parts: a pivot, a currentIndex, and a partitionIndex.
// The pivot is randomly chosen. This is the value that you will compare all the other values to.
// The currentIndex and the partitionIndex will start at the beginning of the array.
// The currentIndex will increment across every element and compare the value to the value of the pivot. It will ignore the pivot and move on to the next element however. 
// The partitionIndex will only move forward if the currentIndex finds a value that is less than the value of the pivot. In this scenario, the currentIndex will find the lesser value element. This lesser value element will switch places with the element at the index of the partitionIndex. And the partitionIndex will increment and move forward by one. 
// Once the currentIndex has incremented through the entire array, the pivot and the element at the partitionIndex will swap places. You now know that the pivot value is in the perfect location for sorting and you can repeat on both sides.
// Imagine the partition as a wall. All lesser values than the pivot need to go on the left side of the wall and the wall needs to move to make room for these lesser values. The wall only moves if a new lesser value has been moved to the left of the wall. However, the currentIndex will increment always.
// Tip: the currentIndex ignores the pivot. The pivot, however, can still be the partitionIndex.

// ========
// THE CODE
// ========

// This is the main function you will fire to sort an array.
function quickSort(arr, left, right) {
  // The first time this function fires, you will only pass in the array to be sorted, not the left and right values. The left and right values will default to 0 and the array length as seen below.
  let len = arr.length;
  let left = left || 0;
  let right = right || arr.length;
  let pivot;
  let partitionIndex;

  // If the left index is less than the right index, you know that there are still elements to be sorted. The if statement block will be executed and you will make two more recursive function calls.
  if (left < right) {
    // First, find the pivot.
    pivot = pickPivot(left, right);
    // Second, partition the array by comparing each element to the pivot value. Move the lesser values to the left side of the partitionIndex and leave the greater values on the right side. 
    // A partitionIndex will be returned and we know that at that index, the element is in the correct location so we no longer have to examine it when sorting.
    partitionIndex = partition(arr, pivot, left, right);

    // Here starts the recursion. We will run the quickSort function on two halves of the array not including the element at the partitionIndex.
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

// This function partitions the array. It compares each element within an index range to the pivot value. If it is less than, it will swap the element with the element at the partitionIndex by using the swap function, if it is greater than the pivot value, it will stay. If swapping occurs, the partitionIndex will increment. Once the for loop is complete, the partition and the pivot will swap.
function partition(arr, pivot, left, right) {
  let pivotValue = arr[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      if (partitionIndex === pivot) {
        pivot = i;
      }
      partitionIndex++;
    }
  }
  swap(arr, pivot, partitionIndex);
  return partitionIndex;
}

// This function will pick the pivot by choosing the middle element of the index range it was given.
function pickPivot(min, max) {
  return Math.ceil((min + max) / 2);
}

// Swapping function to switch places of two elements in the array.
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}