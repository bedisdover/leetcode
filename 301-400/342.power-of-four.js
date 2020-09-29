/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 *
 * https://leetcode.com/problems/power-of-four/description/
 *
 * algorithms
 * Easy (41.37%)
 * Total Accepted:    206.1K
 * Total Submissions: 498K
 * Testcase Example:  '16'
 *
 * Given an integer (signed 32 bits), write a function to check whether it is a
 * power of 4.
 *
 * Example 1:
 *
 *
 * Input: 16
 * Output: true
 *
 *
 *
 * Example 2:
 *
 *
 * Input: 5
 * Output: false
 *
 *
 * Follow up: Could you solve it without loops/recursion?
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
    return num > 0 && (num & (num - 1)) === 0 && (num & 0x55555555) !== 0
}
