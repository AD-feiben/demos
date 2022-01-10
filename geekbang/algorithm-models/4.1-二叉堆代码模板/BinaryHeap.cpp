// C/C++
// Leetcode23 合并K个升序链表


// 堆结点（key用于比较的关键码，listNode可以是任意的附带信息）
struct Node {
    int key;
    ListNode* listNode;
    Node(int key, ListNode* listNode)  : key(key), listNode(listNode) {}
};


// 小根二叉堆
class BinaryHeap {
public:
    bool empty() {
        return heap.empty();
    }
    void push(const Node& node) {
        // 插入到尾部
        heap.push_back(node);
        // 向上调整
        heapifyUp(heap.size() - 1);
    }


    Node pop() {
        Node ans = heap[0];
        // 末尾交换到头部，然后删除末尾
        heap[0] = heap[heap.size() - 1];
        heap.pop_back();
        // 向下调整
        heapifyDown(0);
        return ans;
    }


private:
    void heapifyUp(int p) {
        while (p > 0) {
            int fa = (p - 1) / 2;
            if (heap[p].key < heap[fa].key) { // 小根堆
                swap(heap[p], heap[fa]);
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
            if (otherChild < heap.size() && heap[child].key > heap[otherChild].key)
                child = otherChild;
            // 让child跟p比较
            if (heap[p].key > heap[child].key) { // 小根堆
                swap(heap[p], heap[child]);
                p = child;
                child = p * 2 + 1;
            }
            else break;
        }
    }


    // 数组存储完全二叉树
    // 从索引0开始存
    vector<Node> heap;
};


class Solution {
public:
    // O(元素个数*logK)
    // O(total*logK)
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        BinaryHeap q;
        for (ListNode* listNode : lists) {
            if (listNode != nullptr)
                q.push(Node(listNode->val, listNode));
        }
        ListNode head;
        ListNode* tail = &head;
        while (!q.empty()) {
            // 取出k个指针指向的最小元素
            Node node = q.pop();
            // 在答案链表的末尾插入
            tail->next = node.listNode;
            tail = tail->next;
            // 当最小被取出后，指针向后移动一位，可能需要插入新的元素
            ListNode* p = node.listNode->next;
            if (p != nullptr) {
                q.push(Node(p->val, p));
            }
        }
        return head.next;
    }
};
