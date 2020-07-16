'use strict';

const BT = require('../tree/tree');
const Node = BT.Node;
const BinaryTree = BT.BinaryTree;

function tree_intersection(bt1, bt2) {
  //define an array to store the nodes of the first tree
  let nodes = [];  
  //define an array to store the common nodes
  let commonNodes = [];
  //define a boolean for traversing the second tree
  let secondTree = false;  
  //traverse the first tree -> dfs pre-order
  let _traverse = (node) => {
    //root
    if (secondTree) {
      if (nodes.includes(node.value)) {
        commonNodes.push(node.value);
      }
    } 
    else if (node.value) 
      nodes.push(node.value);
    //left nodes
    if (node.left)
      _traverse(node.left);
    //right nodes
    if (node.right)
      _traverse(node.right);
  };

  //traverse first tree
  _traverse(bt1.root);
  //traverse second tree
  secondTree = true;
  _traverse(bt2.root);

  return commonNodes;
}

///////////Example For Testing///////////////
/** Note:
 * This example is the same as the one in the README
 * in this example, all the common nodes are on the
   same side and on the same level
 * but the this code is very general and works for 
  all cases
   * common nodes on different sides
   * common nodes on different levels
   * common nodes on different sides and different levels
 */

let _150 = new Node(150);
let _100 = new Node(100);
let _250 = new Node(250);
let _75 = new Node(75);
let _160 = new Node(160);
let _125 = new Node(125);
let _175 = new Node(175);
let _200 = new Node(200);
let _350 = new Node(350);
let _300 = new Node(300);
let _500 = new Node(500);

_150.left = _100;
_150.right = _250;
_100.left = _75;
_100.right = _160;
_160.left = _125;
_160.right = _175;
_250.left = _200;
_250.right = _350;
_350.left = _300;
_350.right = _500;

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
