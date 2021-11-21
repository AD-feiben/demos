class MyCircularDeque {
  deque: Array<number> = [];
  length: number = 0;

  constructor(k: number) {
    this.length = k;
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false;
    this.deque.unshift(value);
    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false;
    this.deque.push(value);
    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false;
    this.deque.shift();
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false;
    this.deque.pop();
    return true;
  }

  getFront(): number {
    if (this.deque[0] === void 0) return -1;
    return this.deque[0];
  }

  getRear(): number {
    if (this.isEmpty()) return -1;
    return this.deque[this.deque.length - 1];
  }

  isEmpty(): boolean {
    return this.deque.length === 0;
  }

  isFull(): boolean {
    return this.deque.length === this.length;
  }
}

/**
* Your MyCircularDeque object will be instantiated and called as such:
* var obj = new MyCircularDeque(k)
* var param_1 = obj.insertFront(value)
* var param_2 = obj.insertLast(value)
* var param_3 = obj.deleteFront()
* var param_4 = obj.deleteLast()
* var param_5 = obj.getFront()
* var param_6 = obj.getRear()
* var param_7 = obj.isEmpty()
* var param_8 = obj.isFull()
*/