class Stack {

  constructor(){
    this.count = 0;
    this.items = {};
  }

  // add element to the top of the stack, the element key in the object its going to be the count value
  // and then we add 1 to the count 
  push(element){
    this.items[this.count] = element;
    this.count++
  }

  size(){
    return this.count;
  }

  isEmpty(){
    return this.count === 0
  }

  // remove the last added element (the one in the top) and returns it
  pop(){
    if(this.isEmpty()){
      return undefined;
    }

    // volta um no contador para acessarmos a chave do ultimo elemento adicionado, 
    // visto que após o adicionarmos, já adicionamos mais um ao contador.
    this.count--

    const topElement = this.items[this.count];

    delete this.items[this.count];

    return topElement;
  }

  // return last added element (the one in the top of the stack)
  peek(){
    if(this.isEmpty()){
      return undefined;
    }

    return this.items[this.count - 1];
  }

  // clear the stack
  clear(){
    this.items = {};
    this.count = 0;
  }

  // return the whole stack, but as a string
  toString(){
    if(this.isEmpty()){
      return ''
    }

    // inicializa a var objString com o elemento no topo da stack
    let objString = `${this.items[0]}`;

    // itera pela stack e adiciona os elementos, um a um, na string de objString
    for(let i = 1; i < this.count; i++){
      objString = `${objString},${this.items[i]}`;
    }

    return objString;
  }
}

// With the exception of the toString method, all other methods we created have complexity O(1), meaning we
// can access the element we are interested in directly and perform an action with it (push, pop, or peek).

const stack = new Stack();

console.log(Object.getOwnPropertyNames(stack))
console.log(Object.keys(stack))
console.log(stack.items)

// decimal to binary
function decimalToBinary(decimal){
  // stack onde ficara salvo o binario
  let binaryStack = new Stack();
  // numero decimal 
  let decimalNum = decimal;
  // resto atual da divisão
  let rest; 
  // representação em string do binario que iremos retornar
  let binaryString = '';

  // enquanto o decimal for maior que zero, ou seja, enquanto ainda for haver divisões
  while(decimalNum > 0){
    rest = Math.floor(decimalNum % 2);
    binaryStack.push(rest);
    decimalNum = Math.floor(decimalNum / 2);
  }

  // enquanto stack não estiver vazia, concatemos a string do binario
  while (!binaryStack.isEmpty()) { // {5}
      binaryString += binaryStack.pop().toString();
  }

  return binaryString;
}

const num = 98;

console.log(decimalToBinary(num))
