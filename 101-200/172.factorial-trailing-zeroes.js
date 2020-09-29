/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 *
 * https://leetcode.com/problems/factorial-trailing-zeroes/description/
 *
 * algorithms
 * Easy (37.78%)
 * Total Accepted:    221.9K
 * Total Submissions: 587.2K
 * Testcase Example:  '3'
 *
 * Given an integer n, return the number of trailing zeroes in n!.
 *
 * Example 1:
 *
 *
 * Input: 3
 * Output: 0
 * Explanation: 3! = 6, no trailing zero.
 *
 * Example 2:
 *
 *
 * Input: 5
 * Output: 1
 * Explanation: 5! = 120, one trailing zero.
 *
 * Note: Your solution should be in logarithmic time complexity.
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let ret = 0
    while (n) {
        const tmp = Math.floor(n / 5)
        ret += tmp
        n = tmp
    }
    return ret
}
