class LinkedList {
  key: number;
  val: number;
  prev: LinkedList | null = null;
  next: LinkedList | null = null;
  constructor(key: number = 0, val: number = 0) {
    this.key = key;
    this.val = val;
  }
}

class LRUCache {
  capacity = 0;
  head: LinkedList;
  tail: LinkedList;
  map: Map<number, LinkedList>;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new LinkedList();
    this.tail = new LinkedList();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    let node = this.map.get(key);
    if (!node) return -1;
    this.remove(node);
    this.insert(node);
    return node.val;
  }

  put(key: number, value: number): void {
    let oldNode = this.map.get(key);
    if (oldNode) {
      oldNode.val = value;
      this.remove(oldNode);
      this.insert(oldNode);
      return;
    } else {
      let node = new LinkedList(key, value);
      this.map.set(key, node);
      this.insert(node);

      if (this.map.size > this.capacity) {
        let last = this.tail.prev;
        this.map.delete(last.key);
        this.remove(last);
      }
    }
  }

  insert(node: LinkedList) {
    node.next = this.head.next;
    node.next.prev = node;

    this.head.next = node;
    node.prev = this.head;
  }

  remove(node: LinkedList) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
