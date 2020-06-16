'use strict';

const BinaryTree = require('../tree');

class BreadthFirst extends BinaryTree {

  breadthFirst() {
    let output = [];
    let arr = [];
    if (!this.root) return null;
    arr.push(this.root);
      
    while (arr.length > 0) {
      let node = arr.shift();
      output.push(node.value);
      if (node.left) arr.push(node.left);
      if (node.right) arr.push(node.right);
    }
    return output;
  }
  
}
  
module.exports= BreadthFirst;
