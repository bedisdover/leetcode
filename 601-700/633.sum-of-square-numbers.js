/*
 * @lc app=leetcode id=633 lang=javascript
 *
 * [633] Sum of Square Numbers
 *
 * https://leetcode.com/problems/sum-of-square-numbers/description/
 *
 * algorithms
 * Easy (32.11%)
 * Total Accepted:    73K
 * Total Submissions: 227.6K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer c, your task is to decide whether there're two
 * integers a and b such that a^2 + b^2 = c.
 *
 * Example 1:
 *
 *
 * Input: 5
 * Output: True
 * Explanation: 1 * 1 + 2 * 2 = 5
 *
 *
 *
 *
 * Example 2:
 *
 *
 * Input: 3
 * Output: False
 *
 *
 *
 *
 */
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    if (c < 0) {
        return false
    }
    let l = 0
    let r = Math.floor(Math.sqrt(c))
    while (l <= r) {
        let tmp = l * l + r * r
        if (tmp < c) {
            l++
        } else if (tmp > c) {
            r--
        } else {
            return true
        }
    }
    return false
}
