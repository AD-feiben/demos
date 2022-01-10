// JavaScript
// Leetcode23 合并K个升序链表


// 小根二叉堆
class BinaryHeap {
    constructor() {
        // 数组存储完全二叉树
        // 从索引0开始存
        this.heap = [];
    }


    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }


    isEmpty() {
        return this.heap.length == 0;
    }


    push(node) {
        // 插入到尾部
        this.heap.push(node);
        // 向上调整
        this.heapifyUp(this.heap.length - 1);
    }


    pop() {
        let ans = this.heap[0];
        // 末尾交换到头部，然后删除末尾
        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        // 向下调整
        this.heapifyDown(0);
        return ans;
    }


    heapifyUp(p) {
        while (p > 0) {
            let fa = (p - 1) >> 1;  // 右移1位，等于整除2
            if (this.heap[p].key < this.heap[fa].key) { // 小根堆
                this.swap(p, fa);
                p = fa;
            }
            else break;
        }
    }


    heapifyDown(p) {
        let child = p * 2 + 1;
        while (child < this.heap.length) {  // child未出界，说明p有合法的child，还不是叶子
            let otherChild = p * 2 + 2;
            // 先比较两个孩子，谁小就继续跟p比较
            // child存较小的孩子
            if (otherChild < this.heap.length && this.heap[child].key > this.heap[otherChild].key)
                child = otherChild;
            // 让child跟p比较
            if (this.heap[p].key > this.heap[child].key) { // 小根堆
                this.swap(p, child);
                p = child;
                child = p * 2 + 1;
            }
            else break;
        }
    }
};


/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // O(元素个数*logK)
    // O(total*logK)
    let q = new BinaryHeap();
    for (let listNode of lists) {
        if (listNode != null)
            q.push({key: listNode.val, listNode: listNode});
    }
    let head = new ListNode();
    let tail = head;
    while (!q.isEmpty()) {
        // 取出k个指针指向的最小元素
        let node = q.pop();
        // 在答案链表的末尾插入
        tail.next = node.listNode;
        tail = tail.next;
        // 当最小被取出后，指针向后移动一位，可能需要插入新的元素
        let p = node.listNode.next;
        if (p != null) {
            q.push({key: p.val, listNode: p});
        }
    }
    return head.next;
};
