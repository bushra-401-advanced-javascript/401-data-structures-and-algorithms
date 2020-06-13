'use strict';

let LinkedList = require('./linked-list');

function mergeLists(list1, list2) {
  let zippedList = new LinkedList();
  let currentNode1;
  let currentNode2;
  while(list1.head || list2.head) {
    currentNode1 = list1.head;
    currentNode2 = list2.head;
    if (currentNode1) {
      zippedList.append(currentNode1.value);
      currentNode1 = currentNode1.next;
      list1.head = currentNode1; 
    }
    if(currentNode2) {
      zippedList.append(currentNode2.value);
      currentNode2 = currentNode2.next;
      list2.head = currentNode2;
    }
  }
  return zippedList.toString();
}

module.exports = mergeLists;
