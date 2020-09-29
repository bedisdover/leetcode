/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 *
 * https://leetcode.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (39.54%)
 * Total Accepted:    469.5K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2]'
 *
 * Given a singly linked list, determine if it is a palindrome.
 *
 * Example 1:
 *
 *
 * Input: 1->2
 * Output: false
 *
 * Example 2:
 *
 *
 * Input: 1->2->2->1
 * Output: true
 *
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let slow = head
    let fast = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    const stack = []
    while (slow) {
        stack.push(slow.val)
        slow = slow.next
    }
    let p = head
    while (stack.length) {
        if (p.val !== stack.pop()) {
            return false
        }
        p = p.next
    }
    return true
}
