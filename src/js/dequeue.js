class Dequeue {
  constructor(){
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // is the same as the method in the queue class
  isEmpty(){
    return this.count - this.lowestCount === 0;
  }

  clear(){
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  size(){
    return this.count - this.lowestCount;
  }

  toString(){
    if(this.isEmpty()){
      return undefined;
    }

    debugger;
    let objString = `${this.items[this.lowestCount]}`;

    for(let i = this.lowestCount + 1; i < this.count; i++){
      objString = `${objString},${this.items[i]}`;
    }

    return objString;
  }

  addFront(element){
    if(this.isEmpty()){
      this.addBack(element);
    } else if (this.lowestCount > 0){
      // diminiu o lowest count e adiciona o elemento com a key referente ao valor desse novo lowestCount
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      // se o lowestCount for zero, precisamos subir em 1 o valor da key de cada elemento
      //  para que o novo elemento fique com a key 0 e assim seja o primeiro da lista 
      for (let i = this.count; i > 0; i--){
        this.items[i] = this.items[i - 1];
      }
      
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  addBack(element){
    this.items[this.count] = element;
    this.count++; 
  }

  removeFront(){
    if(this.isEmpty()){
      return undefined;
    }

    debugger;

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack(){
    if(this.isEmpty()){
      return undefined;
    }

    debugger;

    const result = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return result;
  }

  peekFront(){
    if(this.isEmpty()){
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  peekBack(){
    if(this.isEmpty()){
      return undefined;
    }

    return this.items[this.count - 1];
  }
}

function log(msg){
  return console.log(msg);
}

const dequeue = new Dequeue();

log(dequeue.isEmpty());

dequeue.addBack("Iago");
dequeue.addBack("Alice");
dequeue.addBack("Mimola");

log(dequeue.toString());
dequeue.removeBack()
log(dequeue.toString());

dequeue.removeFront()

log(dequeue.toString());
// log(dequeue.size());
// log(dequeue.peekBack());
// log(dequeue.peekFront());
