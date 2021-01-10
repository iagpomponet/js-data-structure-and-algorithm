class Stack {
  constructor(){
    this.items = [];
  }

  // add element to the top of the stack
  push(element){
    this.items.push(element);
  }

  // remove top element and return the element
  pop(){
    return this.items.pop();
  }

  // return the element on the top of the stack (the last added element)
  peek(){
    return this.items[this.items.length - 1];
  }

  // verify if the stack is empty
  isEmpty(){
    return this.items.length === 0;
  }

  // return stack size
  size(){
    return this.items.length;
  }

  // clear the stack
  clear(){
    this.items = [];
  }
}
