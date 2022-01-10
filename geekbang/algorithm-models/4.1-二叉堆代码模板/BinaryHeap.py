# Python
# LeetCode23 合并K个升序链表


from collections import namedtuple


# 堆结点（key用于比较的关键码，listNode可以是任意的附带信息）
Node = namedtuple('Node', ['key', 'listNode'])


# 小根二叉堆
class BinaryHeap:
    def __init__(self):
        # 数组存储完全二叉树
        # 从索引0开始存
        self.heap = [];


    def empty(self):
        return len(self.heap) == 0


    def push(self, node):
        # 插入到尾部
        self.heap.append(node)
        # 向上调整
        self.heapifyUp(len(self.heap) - 1)


    def pop(self):
        ans = self.heap[0]
        # 末尾交换到头部，然后删除末尾
        self.heap[0] = self.heap[-1]
        self.heap.pop()
        # 向下调整
        self.heapifyDown(0)
        return ans


    def heapifyUp(self, p):
        while p > 0:
            fa = (p - 1) // 2
            if self.heap[p].key < self.heap[fa].key: # 小根堆
                self.heap[p], self.heap[fa] = self.heap[fa], self.heap[p]
                p = fa
            else:
                break


    def heapifyDown(self, p):
        child = p * 2 + 1
        while child < len(self.heap):  # child未出界，说明p有合法的child，还不是叶子
            otherChild = p * 2 + 2
            # 先比较两个孩子，谁小就继续跟p比较
            # child存较小的孩子
            if otherChild < len(self.heap) and self.heap[child].key > self.heap[otherChild].key:
                child = otherChild
            # 让child跟p比较
            if self.heap[p].key > self.heap[child].key:  # 小根堆
                self.heap[p], self.heap[child] = self.heap[child], self.heap[p]
                p = child
                child = p * 2 + 1
            else:
                break


class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        # O(元素个数*logK)
        # O(total*logK)
        q = BinaryHeap()
        for listNode in lists:
            if listNode != None:
                q.push(Node(listNode.val, listNode))
        head = ListNode()
        tail = head
        while not q.empty():
            # 取出k个指针指向的最小元素
            node = q.pop()
            # 在答案链表的末尾插入
            tail.next = node.listNode
            tail = tail.next
            # 当最小被取出后，指针向后移动一位，可能需要插入新的元素
            p = node.listNode.next
            if p:
                q.push(Node(p.val, p))
        return head.next
