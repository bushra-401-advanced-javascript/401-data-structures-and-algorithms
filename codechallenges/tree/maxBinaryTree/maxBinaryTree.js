'use strict';

const BinaryTree = require('../tree');

class MaxBinaryTree extends BinaryTree {

  find_maximum_value() {
    let max = 0;
    let _walk = (node) => {
      if (max < node.value) max = node.value;
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root); 
    return max;
  }
}

module.exports = MaxBinaryTree;
