/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 *
 * https://leetcode.com/problems/single-number/description/
 *
 * algorithms
 * Easy (61.70%)
 * Total Accepted:    547.1K
 * Total Submissions: 886.4K
 * Testcase Example:  '[2,2,1]'
 *
 * Given a non-empty array of integers, every element appears twice except for
 * one. Find that single one.
 *
 * Note:
 *
 * Your algorithm should have a linear runtime complexity. Could you implement
 * it without using extra memory?
 *
 * Example 1:
 *
 *
 * Input: [2,2,1]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: [4,1,2,1,2]
 * Output: 4
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  let ret = 0
  for (let i = 0; i < nums.length; i++) {
    ret = ret ^ nums[i]
  }
  return ret
}
