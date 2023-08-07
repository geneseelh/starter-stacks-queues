// creates a node containing the data and a reference to the next item
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    // start with an empty first node, represented by null
    this.top = null;
  }
}

push(value) {
    // create a new node,
    // add data to the new node, and
    // have the pointer point to the top
    this.top = new Node(value, this.top);
    return this;
}

pop(){
    // save the top so we can return it later
    const popped = this.top;
    // point the top pointer to the next item in the stack
    this.top = popped.next;
    // return the value of the popped node
    return popped.value;
}