'use strict';

/*
----------------------
creating a Node class:
----------------------
--> a `value` property for the value stored in the Node
--> a `next` property as a pointer to the next Node
*/

//////////////////////////////////////////////////////////////

/*
-----------------------------
creating a Linked List class:
-----------------------------
--> a `head` property initially with an empty value => to create an empty linked list
--> an `insert()` method that given a value, adds a Node with this value to the head of the list (adds to the beginning of the list)
--> an `append()` method that given a value, adds a Node with this value to the end of the list
--> an `insertBefore()` method that given two values, adds a Node with one value before the other value Node
--> an `insertAfter()` method that given two values, adds a Node with one value after the other value Node
--> an `includes()` method that given a value, checks if this value exists as a Node's value and returns a boolean
--> a `toString()` method that takes no argument and returns a string representation of the linked list, i.e. : "{ a } -> { b } -> { c } -> NULL"
*/

//////////////////////////////////////////////////////////////

//Node Class
class Node {

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//////////////////////////////////////////////////////////////

//LinkedList Class
class LinkedList {

  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    //if the linked list is empty, add this node to the head
    if (this.head === null) {
      this.head = node;
    }
    //if the linked list is not empty and already have linked Nodes:
    //(1) let the next of this node to point at the head of the list, so that this node now is linked to the list before the head and points to the list, i.e. : {node} -> Head -> {value 1} -> {value 2} -> ...
    //(2) now let the head point to this node so it becomes the head of the list and first node of the list, i.e. : Head -> {node} -> {value 1} -> {value 2} -> ...
    else {
      //(1)//
      node.next = this.head;
      //(2)//
      this.head = node;
    }
  }

  append(value) {
    let node = new Node(value);
    //if the linked list is empty, add this node to the head
    if (this.head === null) {
      this.head = node;
    }
    else {
      //if the linked list is not empty, keep traversing until you reach the last node where next = null, let next points to this node
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    if(this.head.value === value){                           
      newNode.next = this.head;
      this.head = newNode;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {                   //[H] --> (1) --> (2) --> (3) --> (4) --> [x]
      if (currentNode.next.value === value) {   //[H] --> (1) --> (2) --> (4) --> [x]
        newNode.next = currentNode.next;       //value =  4, newValue = 3 
        currentNode.next = newNode;          //@currentNode = (2) --> (4) --> [x], newNode = (3) --> [x]
        return this;                        //[H] --> (1) --> (2) --> (4) --> [x]
      }                                                           //  ^
      else { currentNode = currentNode.next; }                  //   |
    }                                                          //   (3)
    return 'Exception';                                    
  }

  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let currentNode = this.head;
    while (currentNode) {                   //[H] --> (1) --> (2) --> (3) --> [x]
      if (currentNode.value === value) {      //value =  3, newValue = 4
        newNode.next = currentNode.next;   //@currentNode = (3) --> [x], newNode = (4) --> [x]
        currentNode.next = newNode;       //[H] --> (1) --> (2) --> (3) --> [x]
        return this;                                                    //   ^
      }                                                                //    |
      currentNode = currentNode.next;                                 //    (4)
    }                                       //[H] --> (1) --> (2) --> (3) --> (4) --> [x]
    return 'Exception';
  }

  includes(value) {
    //start from the head and move through the linked list, as long as the current Node != Null compare its value with the given value, if they're equal return `true` if not move to the next Node and so on..
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    //start from the head and move through the linked list, as long as the current Node != Null take its value and put it in a formatted string then move to the next node and add its value to the same string and so on, after that return the stringified string with a "NULL" added at the end
    let currentNode = this.head;
    let nodeString = '';
    while (currentNode) {
      nodeString += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    return JSON.stringify(nodeString + 'NULL');  //note that if the list is empty it will return only "NULL"
  }
}


module.exports = LinkedList;
