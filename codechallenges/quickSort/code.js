'use strict';

function QuickSort(arr, left, right) {
  if (left < right) {
    let position = Partition(arr, left, right);

    QuickSort(arr, left, position - 1);

    QuickSort(arr, position + 1, right);
  }
  return arr;
}

function Partition(arr, left, right) {
  let povit = arr[right];
  let low = left - 1;

  for(let i = left; i < right; i++) {

    if (arr[i] <= povit) {
      low++;
      Swap(arr, i ,low);
    }

  }
  Swap(arr, right, low + 1);
  return low + 1;
}

function Swap(arr, i, low) {
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}


console.log(QuickSort([8,4,23,42,16,15], 0, 5));

module.exports = QuickSort;
