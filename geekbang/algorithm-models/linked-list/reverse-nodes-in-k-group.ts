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
/** 返回走k-1步后的节点，返回null表示不够k个 */
function getEnd(head: ListNode, k: number): ListNode | null {
  while (head !== null) {
    k--;
    if (k === 0) return head;
    head = head.next;
  }
  return null;
}

/** 反转 head 到 stop 之间的节点 */
function reverseList(head: ListNode, stop: ListNode): void {
  let last = head;
  head = head.next;
  while (head !== stop) {
    const nextNode = head.next;
    head.next = last;
    last = head;
    head = nextNode;
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let protect = new ListNode(0);
  let last = protect;
  while (head !== null) {
    // 1. 分组（往后走k-1步，找到一组）
    //    一组的开头head 结尾end
    let end = getEnd(head, k);
    if (end === null) break;

    const nextGroupHead = end.next;

    // 2. 一组内部（head到end之间）要反转（调用反转链表）
    reverseList(head, nextGroupHead);

    // 3. 更新每组跟前一组、后一组之间的边
    last.next = end;
    head.next = nextGroupHead;

    last = head;
    head = nextGroupHead;
  }

  return protect.next;
}
