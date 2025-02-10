// Description:
// You are given the heads of two sorted linked lists list1 and list2.
//
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
//
// Return the head of the merged linked list.

// Constraints:
//    The number of nodes in both lists is in the range [0, 50].
//    -100 <= Node.val <= 100
//    Both list1 and list2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
export const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null => {
  let ln = new ListNode();
  const res = ln;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      ln.next = list1;
      list1 = list1.next;
    } else {
      ln.next = list2;
      list2 = list2.next;
    }

    ln = ln.next;
  }

  ln.next = list1 ? list1 : list2;

  return res.next;
};
