/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (37.39%)
 * Total Accepted:    736K
 * Total Submissions: 2M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 *
 * Note that an empty string is also considered valid.
 *
 * Example 1:
 *
 *
 * Input: "()"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: "()[]{}"
 * Output: true
 *
 *
 * Example 3:
 *
 *
 * Input: "(]"
 * Output: false
 *
 *
 * Example 4:
 *
 *
 * Input: "([)]"
 * Output: false
 *
 *
 * Example 5:
 *
 *
 * Input: "{[]}"
 * Output: true
 *
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = []
  const left = ['(', '[', '{']
  const right = [')', ']', '}']
  for (let i = 0; i < s.length; i++) {
    if (left.includes(s[i])) {
      stack.push(s[i])
    } else if (left.indexOf(stack.pop()) !== right.indexOf(s[i])) {
      return false
    }
  }
  return !stack.length
}
console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid('([]'))
console.log(isValid('([)]'))
console.log(isValid('{[]}'))
