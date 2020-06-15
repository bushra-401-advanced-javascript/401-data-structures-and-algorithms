'use strict';

//Node Class
class Node {
  constructor(value, right = null, left = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

//BT Class
class BinaryTree {
  constructor(root) {
    this.root = root;
  }
  preOrder() {
    //root - left - right
    let results = [];
    let _traversal = (node) => {
      results.push(node.value);
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }
  inOrder() {
    //left - root - right
    let results = [];
    let _traversal = (node) => {
      if (node.left) _traversal(node.left);
      results.push(node.value);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }
  postOrder() {
    //left - right - root
    let results = [];
    let _traversal = (node) => {
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
      results.push(node.value);
    };
    _traversal(this.root);
    return results;
  }
}

//BST Class
class BinarySearchTree{
  constructor(){
    this.root=null;
  }
  add(value){
    if(typeof value !== 'number'){
      return 'The value should be a number.';
    }
    if(this.root === null){
      this.root = new Node(value);
      return this;
    }

    return  traversal(this.root);

    function traversal(node){
      if(value < node.value){
        if(node.left === null){
          node.left = new Node(value);
          return this;
        }else {
          return traversal(node.left);
        }
      }else if(value>node.value){
        if(node.right === null){
          node.right = new Node(value);
          return this;
        }else {
          return traversal(node.right);
        }
      }else {
        return 'this node is already exist';
      }
    }
  }

  contains(value){
    if(typeof value !== 'number'){
      return 'the value should be number';
    }
    if(this.root === null ){
      return 'Tree is Empty';
    }
    let node = this.root;
    while(node !== null){
      if(value === node.value){
        return true;
      }else if(value < node.value){
        node = node.left;
      } else  if(value > node.value){
        node = node.right;
      }
    }
    return false;
  }
}


module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
};

