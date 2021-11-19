class MinStack {
  valStack: Array<number> = [];
  minStack: Array<number> = [Infinity];

  constructor() {}

  push(val: number): void {
    this.valStack.push(val);
    this.minStack.push(
      Math.min(val, this.minStack[this.minStack.length - 1])
    );
  }

  pop(): void {
    this.valStack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.valStack[this.valStack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
