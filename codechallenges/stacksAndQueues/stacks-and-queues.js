'use strict';

//Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//////////////////////
//Stack Class
class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    if (this.top === null) {
      this.top = node;
    }
    else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if (this.top) {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      return temp.value;
    }
    else return 'Exception';
  }
  
  peek() {
    return this.top;
  }
  
  isEmpty() {
    return this.top ? false : true;
  }
}

///////////////////////////////
//Queue Class
class Queue {
  constructor() {
    this.front = null;  //create an initial empty queue
  }

  enqueue(value) {
    let node = new Node(value);
    if (this.front === null) this.front = node;
    else {
      let curretn = this.front;
      while(curretn) {
        if (curretn.next === null) {
          curretn.next = node;
          curretn = node;
          return this;
        }
        curretn = curretn.next;
      }
    }
  }

  dequeue() {
    if (this.front) {
      let temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      return temp.value;
    }
    else return 'Exception';

  }

  peek() {
    return this.front.value;
  }

  isEmpty() {
    return this.front == null;
  }
}


