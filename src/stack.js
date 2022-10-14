const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arr = [];
  } 

  push(element) {
    this.arr.push(element);
  }

  pop() {
    if(this.arr.length === 0) {
      return undefined
    }
    return this.arr.splice(this.arr.length - 1, 1)[0]

  }  
  peek() {
    return this.arr[this.arr.length - 1]
  }
}
module.exports = {
  Stack
};


// const stack1 = new Stack();
// stack1.push(1)
// stack1.push(2)
// stack1.push(3)

// console.log(stack1.pop());
// console.log(stack1.arr);
// console.log(stack1.peek());