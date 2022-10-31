let items = new WeakMap();

class Stack {
  constructor() {
    items.set(this, []);
  }
  push(element) {
    let s = items.get(this);
    s.push(element);
  }
  pop() {
    let s = items.get(this);
    let r = s.pop();
    console.log(r);
    return r;
  }
  //other methods
}

let stackOne = new Stack();
let stackTwo = new Stack();

stackOne.push(23);
stackTwo.push(22);
stackTwo.push(2);
console.log(items);
console.log(stackOne.pop());
