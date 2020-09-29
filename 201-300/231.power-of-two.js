/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 *
 * https://leetcode.com/problems/power-of-two/description/
 *
 * algorithms
 * Easy (43.74%)
 * Total Accepted:    367.6K
 * Total Submissions: 840.6K
 * Testcase Example:  '1'
 *
 * Given an integer, write a function to determine if it is a power of two.
 *
 * Example 1:
 *
 *
 * Input: 1
 * Output: true
 * Explanation: 2^0 = 1
 *
 *
 * Example 2:
 *
 *
 * Input: 16
 * Output: true
 * Explanation: 2^4 = 16
 *
 * Example 3:
 *
 *
 * Input: 218
 * Output: false
 *
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
   while (n > 0) {
      if (n === 1) {
         return true
      }
      n = n / 2
      if (n !== Math.floor(n)) {
         return false
      }
   }
   return false
}
