// Description:
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Constraints:
//  The number of nodes in the list is sz.
//    1 <= sz <= 30
//    0 <= Node.val <= 100
//    1 <= n <= sz
/**
 Definition for singly-linked list.
     */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const removeNthFromEnd = (
  head: ListNode | null,
  n: number,
): ListNode | null => {
  if (!head) {
    return null;
  }
  const result = new ListNode();
  result.next = head;

  let first: ListNode | null = result;
  let second: ListNode | null = result;

  if (first && second) {
    for (let i = 0; i < n; i++) {
      second = second?.next || null;
    }

    while (second?.next) {
      first = first?.next || null;
      second = second.next;
    }

    if (first) {
      first.next = first?.next?.next || null;
    }
  }

  return result.next;
};
