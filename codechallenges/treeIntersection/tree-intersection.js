'use strict';

const BT = require('../tree/tree');
const Node = BT.Node;
const BinaryTree = BT.BinaryTree;

function tree_intersection(bt1, bt2) {
  //define an array to store the common nodes
  let commonNodes = [];

  //traverse the first tree -> dfs pre-order
  let _traverseTwoTrees = (node1, node2) => {
    //chech roots
    if (node1 && node2 && node1.value === node2.value) {
    //   console.log(node1.value, node2.value, node1.value === node2.value);  
      commonNodes.push(node1.value);
    }
    //check left nodes
    if (node1.left && node2.left)
      _traverseTwoTrees(node1.left, node2.left);
    //check left nodes with right nodes
    if (node1.left && node2.right)
      _traverseTwoTrees(node1.left, node2.right);
    //check right nodes
    if (node1.right && node2.right)
      _traverseTwoTrees(node1.right, node2.right);
    //check right nodes with left nodes

  };

  _traverseTwoTrees(bt1.root, bt2.root);
  return commonNodes;
}

///////////Example For Testing///////////////

let _150 = new Node(150);
let _$600 = new Node(600);
let _250 = new Node(250);
let _75 = new Node(75);
let _160 = new Node(160);
let _125 = new Node(125);
let _175 = new Node(175);
let _200 = new Node(200);
let _350 = new Node(350);
// let _300 = new Node(300);
// let _500 = new Node(500);

_150.left = _$600;
_150.right = _250;
_$600.left = _75;
_$600.right = _160;
_160.left = _125;
_160.right = _175;
_250.left = _200;
_250.right = _350;
// _350.left = _300;
// _350.right = _500;

let tree1 = new BinaryTree(_150);

let _42 = new Node(42);
let _$100 = new Node(100);
let _600 = new Node(600);
let _15 = new Node(15);
let _$160 = new Node(160);
let _$125 = new Node(125);
let _$175 = new Node(175);
let _$200 = new Node(200);
let _$350 = new Node(350);
let _4 = new Node(4);
let _$500 = new Node(500);

_42.left = _$100;
_42.right = _600;
_$100.left = _15;
_$100.right = _$160;
_$160.left = _$125;
_$160.right = _$175;
_600.left = _$200;
_600.right = _$350;
_$350.left = _4;
_$350.right = _$500;

let tree2 = new BinaryTree(_42);

console.log(tree_intersection(tree1, tree2));
