'use strict';

//Node Class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

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
}