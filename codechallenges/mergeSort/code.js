'use strict';

function Mergesort(arr) {

  const n = arr.length;

  if (n > 1) {
    const mid = Math.floor(n/2);

    const left = arr.slice(0, mid);

    const right = arr.slice(mid);

    Mergesort(left);

    Mergesort(right);

    return Merge(left, right, arr);
  }
}


function Merge(left, right, arr){
  let i = 0;
  let j = 0 ;
  let k = 0 ;

  while(i < left.length && j < right.length){

    if(left[i] <= right[j]){

      arr[k] = left[i];
      i++;
    }
    
    else{
      arr[k] = right[j];
      j++;
    }

    k++;
  }
  if(i === left.length){
    while(j < right.length){
      arr[k] = right[j];
      j++;
      k++;
    }
  }

  else{
    while(i < left.length){
      arr[k] = left[i];
      i++;
      k++;
    }
  }

  return arr;
}

console.log(Mergesort([8,4,23,42,16,15]));
