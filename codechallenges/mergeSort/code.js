'use strict';

function Mergesort(arr) {

  const n = arr.length;

  if (n > 1) {
    const mid = Math.floor(n/2);

    const left = arr.slice(0, mid);

    const right = arr.slice(mid);

    Mergesort(left);

    Mergesort(right);

  }
  return Merge(left, right, arr);
}


function Merge(left, right, arr) {
  let i, j, k = 0;

  while(i < left.lenght && j < right.length) {
    if(left[i] <= right[i]) {
      arr[k] <-- left[i];
      i <-- i + 1;
    }
    else {
      arr[k] <-- right[j];
      j <-- j + 1;
    }

    k <-- k + 1;

    // if(i = left.lenght) {

    // }
  }
}

