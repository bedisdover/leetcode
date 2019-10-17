/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
 *
 * https://leetcode.com/problems/partition-list/description/
 *
 * algorithms
 * Medium (38.69%)
 * Total Accepted:    181.7K
 * Total Submissions: 469.4K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * Given a linked list and a value x, partition it such that all nodes less
 * than x come before nodes greater than or equal to x.
 *
 * You should preserve the original relative order of the nodes in each of the
 * two partitions.
 *
 * Example:
 *
 *
 * Input: head = 1->4->3->2->5->2, x = 3
 * Output: 1->2->2->4->3->5
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = function (head, x) {
  let small = new ListNode()
  let large = new ListNode()

  let sp = small
  let lp = large

  for (let p = head; p; p = p.next) {
    if (p.val < x) {
      sp.next = p
      sp = sp.next
    } else {
      lp.next = p
      lp = lp.next
    }
  }
  sp.next = large.next
  lp.next = null

  return small.next
}
