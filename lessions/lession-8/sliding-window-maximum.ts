class HeapNode {
  val: number;
  index: number;
  constructor(val: number, index: number) {
    this.val = val;
    this.index = index;
  }
}

class BinaryHeap {
  heap: HeapNode[] = [];
  constructor() {
    this.heap.push(new HeapNode(-1, -1));
  }

  empty() {
    return this.heap.length === 1;
  }

  insert(node: HeapNode) {
    this.heap.push(node);
    this.heapifyUp(this.heap.length - 1);
  }

  getMax() {
    if (this.empty()) return null;
    return this.heap[1];
  }

  deleteMax() {
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
      if (this.heap[p].val > this.heap[parentIndex].val) {
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
        this.heap[other].val > this.heap[child].val
      )
        child = other;
      if (this.heap[child].val > this.heap[p].val) {
        this.swap(p, child);
        p = child;
        child = child * 2;
      } else break;
    }
  }
}

function maxSlidingWindow(nums: number[], k: number): number[] {
  let q = new BinaryHeap();
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    q.insert(new HeapNode(nums[i], i));
    if (i >= k - 1) {
      let node = q.getMax();
      while (i - node.index > k - 1) {
        q.deleteMax();
        node = q.getMax();
      }
      ans.push(node.val);
    }
  }
  return ans;
}
