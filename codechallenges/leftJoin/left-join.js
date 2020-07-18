'use strict';

function leftJoin(map1, map2) {
  let data = Object.values(map1)[1];
  let results = [];
  data.forEach((val, idx) => {
    if (val) {
      //   console.log(`${idx}: ${JSON.stringify(val)}`);
      //   console.log(val.values());
      const word = Object.keys(val.values()[0]);
      const synonym = Object.values(val.values()[0]);
      const antonym = map2.get(word[0]);
      results.push([word[0], synonym[0], antonym]);
    }
  });
  console.log(results);
  return results;
}

/////////////////////////////

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
/////////////////////////////

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
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}
/////////////////////////////

class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) { 
    return key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  set(key, value) {
    let hash = this.hash(key);
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }

    let entry = {[key]: value};
    this.map[hash].add(entry);
  }

  get(key) {
    let hash = this.hash(key);
    if (this.map[hash]) {
      let values = this.map[hash].values(); 
      let keyVal;
      values.forEach(entry => {
        if(Object.keys(entry)[0] === key) {
          keyVal = Object.values(entry);
        }
      });
      return keyVal[0];
    }
    else {
    //   console.log(`Sorry, This key: '${key}' doesn't exist in the table :(`);
      return null;
    }
  }
}
/////////////////////////////

//Example
let SynHash = new Hashmap(1024);
SynHash.set('guid', 'usher');
SynHash.set('outift' ,'garb');
SynHash.set('fond' ,'enamored');

let AntHash = new Hashmap(1024);
AntHash.set('guid', 'follow');
AntHash.set('fond' ,'averse');


leftJoin(SynHash, AntHash);
