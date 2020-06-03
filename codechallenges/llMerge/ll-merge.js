'use strict';

let LinkedList = require('./linked-list');

function mergeLists(list1, list2) {
    let mergedList = new LinkedList();
    mergedList.head = list1.head;
    let currentNode = mergedList.head;
    while(currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = list2.head;
    return mergedList;
}
