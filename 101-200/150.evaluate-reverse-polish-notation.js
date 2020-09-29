/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 *
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
 *
 * algorithms
 * Medium (33.65%)
 * Total Accepted:    187.1K
 * Total Submissions: 553.4K
 * Testcase Example:  '["2","1","+","3","*"]'
 *
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 *
 * Valid operators are +, -, *, /. Each operand may be an integer or another
 * expression.
 *
 * Note:
 *
 *
 * Division between two integers should truncate toward zero.
 * The given RPN expression is always valid. That means the expression would
 * always evaluate to a result and there won't be any divide by zero
 * operation.
 *
 *
 * Example 1:
 *
 *
 * Input: ["2", "1", "+", "3", "*"]
 * Output: 9
 * Explanation: ((2 + 1) * 3) = 9
 *
 *
 * Example 2:
 *
 *
 * Input: ["4", "13", "5", "/", "+"]
 * Output: 6
 * Explanation: (4 + (13 / 5)) = 6
 *
 *
 * Example 3:
 *
 *
 * Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
 * Output: 22
 * Explanation:
 * ⁠ ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
 * = ((10 * (6 / (12 * -11))) + 17) + 5
 * = ((10 * (6 / -132)) + 17) + 5
 * = ((10 * 0) + 17) + 5
 * = (0 + 17) + 5
 * = 17 + 5
 * = 22
 *
 *
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
  const stack = []
  const operator = ['+', '-', '*', '/']
  tokens.forEach(item => {
    if (operator.includes(item)) {
      const right = stack.pop()
      const left = stack.pop()
      let ret = null
      switch (item) {
        case '+':
          ret = left + right
          break
        case '-':
          ret = left - right
          break
        case '*':
          ret = left * right
          break
        case '/':
          ret = ~~(left / right)
          break
      }
      stack.push(ret)
    } else {
      stack.push(+item)
    }
  })
  return stack.pop()
}

console.assert(evalRPN(['2', '1', '+', '3', '*']) === 9)
console.assert(evalRPN(['4', '13', '5', '/', '+']) === 6)
console.assert(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']) === 22)