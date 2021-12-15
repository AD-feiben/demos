/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class HeapNode {
  key: number;
  listNode: ListNode | null;
  constructor(key: number, listNode: ListNode | null) {
    this.key = key;
    this.listNode = listNode;
  }
}

class BinaryHeap {
  heap: HeapNode[] = [];
  constructor() {
    this.heap.push(new HeapNode(0, null));
  }

  empty() {
    return this.heap.length === 1;
  }

  getMin() {
    if (this.empty()) return null;
    return this.heap[1];
  }

  insert(node: HeapNode) {
    this.heap.push(node);
    this.heapifyUp(this.heap.length - 1);
  }

  pop() {
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(1);
  }

  swap(p1: number, p2: number) {
    let temp = this.heap[p1];
    this.heap[p1] = this.heap[p2];
    this.heap[p2] = temp;
  }

  heapifyUp(p: number) {
    while (p > 1) {
      let parentIndex = Math.floor(p / 2);
      if (this.heap[p].key < this.heap[parentIndex].key) {
        this.swap(p, parentIndex);
        p = parentIndex;
      } else break;
    }
  }

  heapifyDown(p: number) {
    let child = p * 2;
    while (child < this.heap.length) {
      let other = child + 1;
      if (
        other < this.heap.length &&
        this.heap[other].key < this.heap[child].key
      )
        child = other;

      if (this.heap[child].key < this.heap[p].key) {
        this.swap(child, p);
        p = child;
        child = p * 2;
      } else break;
    }
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let q = new BinaryHeap();

  for (let node of lists) {
    if (node === null) continue;
    q.insert(new HeapNode(node.val, node));
  }

  let head = new ListNode();
  let tail = head;

  while (!q.empty()) {
    let node = q.getMin();
    q.pop();
    tail.next = node.listNode;
    tail = tail.next;
    let next = node.listNode.next;
    if (next) {
      q.insert(new HeapNode(next.val, next));
    }
  }

  return head.next;
}
