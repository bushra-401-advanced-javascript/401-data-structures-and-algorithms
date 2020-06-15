'use strict';

function fizzBuzzTree(tree) {
  let current = tree.root;
  while(current.right) {
    if((!(current.right.value % 5)) && (!(current.right.value % 3))){
      current.right.value = 'FizzBuzz';       
    } else if (((current.right.value % 5)) && (!(current.right.value % 3))){
      current.right.value = 'Fizz';       
    } else if ((!(current.right.value % 5)) && ((current.right.value % 3))){
      current.right.value = 'Buzz';       
    }

    current = current.right;
  }
  current = tree.root;
  while(current.left){
    if((!(current.left.value % 5)) && (!(current.left.value % 3))){
      current.left.value = 'FizzBuzz';       
    } else if (((current.left.value % 5)) && (!(current.left.value % 3))){
      current.left.value = 'Fizz';       
    } else if ((!(current.left.value % 5)) && ((current.left.value % 3))){
      current.left.value = 'Buzz';       
    }

    current = current.left;
  }
  if(tree.root){
    if((!(tree.root.value % 5)) && (!(tree.root.value % 3))){
      tree.root.value = 'FizzBuzz';       
    } else if (((tree.root.value % 5)) && (!(tree.root.value % 3))){
      tree.root.value = 'Fizz';       
    } else if ((!(tree.root.value % 5)) && ((tree.root.value % 3))){
      tree.root.value = 'Buzz';       
    }
  }

  return tree;
}
