/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 *
 * https://leetcode.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (26.52%)
 * Total Accepted:    225K
 * Total Submissions: 846.2K
 * Testcase Example:  '"(()"'
 *
 * Given a string containing just the characters '(' and ')', find the length
 * of the longest valid (well-formed) parentheses substring.
 *
 * Example 1:
 *
 *
 * Input: "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()"
 *
 *
 * Example 2:
 *
 *
 * Input: ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()"
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
  let ret = 0
  let last = -1
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else {
      if (!stack.length) {
        last = i
      } else {
        stack.pop()
        if (stack.length) {
          ret = Math.max(ret, i - stack[stack.length - 1])
        } else {
          ret = Math.max(ret, i - last)
        }
      }
    }
  }
  return ret
}
console.assert(longestValidParentheses('(()') === 2)
console.assert(4 === longestValidParentheses(')()()'))
console.assert(2 === longestValidParentheses('()(()'))
