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

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummy = new ListNode(-1);
  let prev = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  prev.next = l1 ? l1 : l2;

  return dummy.next;
}

/** 解法一 */
// function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
//   if (lists.length < 1) return null;
//   let head = lists.pop();
//   while (lists.length > 0) {
//     head = mergeTwoLists(head, lists.pop());
//   }
//   return head;
// }

/** 解法二 */
function merge(lists: Array<ListNode | null>, l: number, r: number) {
  if (l > r) return null;
  if (l === r) return lists[l];
  if (r - l === 1) return mergeTwoLists(lists[l], lists[r]);

  let m = Math.floor((r - l) / 2) + l;
  return mergeTwoLists(merge(lists, l, m), merge(lists, m + 1, r));
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  return merge(lists, 0, lists.length - 1);
}
