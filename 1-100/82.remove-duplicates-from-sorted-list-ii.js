/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (34.32%)
 * Total Accepted:    204.7K
 * Total Submissions: 595.9K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * Given a sorted linked list, delete all nodes that have duplicate numbers,
 * leaving only distinct numbers from the original list.
 *
 * Example 1:
 *
 *
 * Input: 1->2->3->3->4->4->5
 * Output: 1->2->5
 *
 *
 * Example 2:
 *
 *
 * Input: 1->1->1->2->3
 * Output: 2->3
 *
 *
 */
/**
 * Definition for singly-linked list.
 */
function ListNode (val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  let prev = new ListNode()
  prev.next = head

  let p = head
  let q = prev

  let temp = null
  while (p) {
    if (p.next && p.next.val === p.val) {
      temp = p.val
      p.next = p.next.next
    } else if (temp !== null) {
      p = p.next
      q.next = p
      temp = null
    } else {
      q = p
      p = p.next
    }
  }

  return prev.next
}
