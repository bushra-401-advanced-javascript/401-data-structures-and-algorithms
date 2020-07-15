'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//////////////////

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    // return values of nodes in linkedlist : values in array []
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}
//////////////////

class Hashmap {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) { 
    // hash the key to get the index of where to store the data.
    return key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  add(key, value) {
    let hash = this.hash(key);
    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();
    }
    // pass entry to the map 
    // using object, you can use anything
    let entry = {[key]: value};
    // add to our linkedlist
    this.table[hash].add(entry);
  }

  get(key) {
    // find a key in the hashmap and return its value
    let hash = this.hash(key);
    if (this.table[hash]) {
      let values = this.table[hash].values(); //array of the data entries in the LL (at the hashed index)
      let keyVal;
      values.forEach(entry => {
        if(Object.keys(entry)[0] === key) {
          keyVal = Object.values(entry);
        }
      });
      return keyVal[0];
    }
    else {
      return `Sorry, the key (${key}) doesn\'t exist in the table :(`;
    }
  }
  
  contains(key) {
    let hash = this.hash(key);
    let contains = false;
    if (this.table[hash]) {
      let values = this.table[hash].values(); //array of the data entries in the LL (at the hashed index)
      values.forEach((entry) => {
        if(Object.keys(entry)[0] === key) {
          contains = true;  
        }
        else contains = false;
    });
    return `contains (${key}): ${contains}`;
    }
    else {
      return `contains (${key}): ${contains}`;
    }  
  }
}


let map = new Hashmap(1024);
map.add('guid', 'usher');
map.add('outift' ,'garb');
map.add('fond' ,'enamored');

console.log(map.hash('guid'));
console.log(map.get('outift'));
console.log(map.get('follow'));
console.log(map.contains('fond'));
console.log(map.contains('follow'));
