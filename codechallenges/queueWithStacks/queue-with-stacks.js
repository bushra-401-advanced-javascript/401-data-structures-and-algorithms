'use strict';

//Node and Stack Classes
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor(){
    this.storage = new Array();
    this.top = null ;
  }

  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.storage.unshift(newNode);
    this.top = newNode;
  }
  pop(){
    if(this.top == null){
      return 'Exception Empty Stack';
    }
    let output = this.storage.shift();
    this.top = this.storage[0];
    return output.value;
  }
  peek(){
    if(this.top == null){
      return 'Exception Empty Stack';
    }
    return this.top.value;
  }
}
//////////////////////////////////////
//creating a pseudo queue class to implement the standard queue interface
class PseudoQueue {
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(value){
    this.stack1.push(value);
    return this;
  }
  dequeue(){
    if(this.stack1.top == null){
      return 'Empty Queue';
    }
    while(this.stack1.top){
      let output = this.stack1.pop();
      this.stack2.push(output);
    }
    let output = this.stack2.pop();
    while(this.stack2.top){
      let output2 = this.stack2.pop();
      this.stack1.push(output2);
    }
    return output;
  }
}
  