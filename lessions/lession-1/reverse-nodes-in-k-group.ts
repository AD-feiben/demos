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

function getEnd(head: ListNode, k: number) {
  while (head !== null) {
    if (k === 0) return head;
    head = head.next;
    k--;
  }
  return head;
}

function reverseList(head: ListNode, stop: ListNode): void {
  let last = head;
  head = head.next;
  while (head !== stop) {
    let nextHead = head.next;
    head.next = last;
    last = head;
    head = nextHead;
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let protect = new ListNode(0);
  let last = protect;
  // 1. 分组, 走 k - 1 步
  while (head !== null) {
    let end = getEnd(head, k - 1);
    if (end === null) break;

    let nextGroupHead = end.next;

    // 2. 组内反转
    reverseList(head, nextGroupHead);

    // 3. 调整边
    last.next = end;
    head.next = nextGroupHead;

    last = head;
    head = nextGroupHead;
  }

  return protect.next;
}
