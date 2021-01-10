class Queue {
  constructor(){
    // count to help us to control the size the the queue
    this.count = 0;
    // the lowestcount will help up to keep track of the first element of the queue
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element){
    this.items[this.count] = element;
    this.count++
  }

  dequeue(){
    if(this.isEmpty()){
      return undefined;
    }

    // saving it in a variable only to return the value that will be lost when we delete
    const result = this.items[this.lowestCount];

    delete this.items[this.lowestCount];

    // ex: when we first dequeue a queue the element in the key 0 will not be the first on the line anymore
    // so we change the lowest count (the key of the next element to be removed, the key of the first in line) to be 1
    this.lowestCount++

    return result;
  }


  peek(){
    if(this.isEmpty()){
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  isEmpty(){
    return this.count - this.lowestCount === 0;
  }

  size(){
    return this.count - this.lowestCount;
  }

  clear(){
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString(){
    if(this.isEmpty()){
      return undefined;
    }

    let objString = `${this.items[this.lowestCount]}`;

    for(let i = this.lowestCount + 1; i < this.count; i++){
      objString = `${objString},${this.items[i]}`
    }

    

    return objString;
  }
}

const queue = new Queue;

queue.enqueue("Alice");
queue.enqueue("Iago");

queue.dequeue();
queue.dequeue();

console.log(queue.isEmpty());
console.log(queue.toString());