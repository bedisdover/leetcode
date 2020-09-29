/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 *
 * https://leetcode.com/problems/single-number-ii/description/
 *
 * algorithms
 * Medium (47.38%)
 * Total Accepted:    183.1K
 * Total Submissions: 386.2K
 * Testcase Example:  '[2,2,3,2]'
 *
 * Given a non-empty array of integers, every element appears three times
 * except for one, which appears exactly once. Find that single one.
 *
 * Note:
 *
 * Your algorithm should have a linear runtime complexity. Could you implement
 * it without using extra memory?
 *
 * Example 1:
 *
 *
 * Input: [2,2,3,2]
 * Output: 3
 *
 *
 * Example 2:
 *
 *
 * Input: [0,1,0,1,0,1,99]
 * Output: 99
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const arr = new Array(32).fill(0)
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < 32; j++) {
      arr[j] += (nums[i] >>> j) & 1
      arr[j] %= 3
    }
  }

  let ret = 0
  for (let i = 0; i < 32; i++) {
    ret += (arr[i] << i)
  }
  return ret
}
