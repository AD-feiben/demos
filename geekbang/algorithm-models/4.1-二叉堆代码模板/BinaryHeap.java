// Java
// Leetcode23 合并K个升序链表


import java.util.Collections;


// 堆结点（key用于比较的关键码，listNode可以是任意的附带信息）
public class Node {
    int key;
    ListNode listNode;
    Node(int key, ListNode listNode) {
        this.key = key;
        this.listNode = listNode;
    }
}


// 小根二叉堆
class BinaryHeap {
    public BinaryHeap() {
        heap = new ArrayList<Node>();
    }


    public boolean isEmpty() {
        return heap.isEmpty();
    }


    public void push(Node node) {
        // 插入到尾部
        heap.add(node);
        // 向上调整
        heapifyUp(heap.size() - 1);
    }


    public Node pop() {
        Node ans = heap.get(0);
        // 末尾交换到头部，然后删除末尾
        Collections.swap(heap, 0, heap.size() - 1);
        heap.remove(heap.size() - 1);
        // 向下调整
        heapifyDown(0);
        return ans;
    }


    void heapifyUp(int p) {
        while (p > 0) {
            int fa = (p - 1) / 2;
            if (heap.get(p).key < heap.get(fa).key) { // 小根堆
                Collections.swap(heap, p, fa);
                p = fa;
            }
            else break;
        }
    }


    void heapifyDown(int p) {
        int child = p * 2 + 1;
        while (child < heap.size()) {  // child未出界，说明p有合法的child，还不是叶子
            int otherChild = p * 2 + 2;
            // 先比较两个孩子，谁小就继续跟p比较
            // child存较小的孩子
            if (otherChild < heap.size() && heap.get(child).key > heap.get(otherChild).key)
                child = otherChild;
            // 让child跟p比较
            if (heap.get(p).key > heap.get(child).key) { // 小根堆
                Collections.swap(heap, p, child);
                p = child;
                child = p * 2 + 1;
            }
            else break;
        }
    }


    // 数组存储完全二叉树
    // 从索引0开始存
    List<Node> heap;
};


class Solution {
    // O(元素个数*logK)
    // O(total*logK)
    public ListNode mergeKLists(ListNode[] lists) {
        BinaryHeap q = new BinaryHeap();
        for (ListNode listNode : lists) {
            if (listNode != null)
                q.push(new Node(listNode.val, listNode));
        }
        ListNode head = new ListNode();
        ListNode tail = head;
        while (!q.isEmpty()) {
            // 取出k个指针指向的最小元素
            Node node = q.pop();
            // 在答案链表的末尾插入
            tail.next = node.listNode;
            tail = tail.next;
            // 当最小被取出后，指针向后移动一位，可能需要插入新的元素
            ListNode p = node.listNode.next;
            if (p != null) {
                q.push(new Node(p.val, p));
            }
        }
        return head.next;
    }
};
