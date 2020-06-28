'use strict';

const Tree = require('../tree');
const BinaryTree = Tree.BinaryTree;

class BTSummation extends BinaryTree {

  oddSum() {
      
    let sum = 0;

    if(this.root) {
      sumOddNodes(this.root);
    }
    
    function sumOddNodes(node) {

      if(typeof(node.value) === 'number') {

        if(node.value % 2 !== 0) {
          sum += node.value;
        }

      }

      if(node.right) sumOddNodes(node.right);

      if(node.left) sumOddNodes(node.left);
      
    }
    
    return sum;

  }

}

module.exports = BTSummation;


