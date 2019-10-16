/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (45.73%)
 * Total Accepted:    389.2K
 * Total Submissions: 851.2K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * Given an array nums of n integers and an integer target, find three integers
 * in nums such that the sum is closest to target. Return the sum of the three
 * integers. You may assume that each input would have exactly one solution.
 *
 * Example:
 *
 *
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 *
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  if (nums.length < 3) {
    return 0
  }

  nums.sort((a, b) => a - b)
  let ret = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) {
      continue
    }

    let l = i + 1
    let r = nums.length - 1

    let sum
    while (l < r) {
      sum = nums[i] + nums[l] + nums[r]
      if (sum === target) {
        return target
      } else if (sum < target) {
        l++
      } else {
        r--
      }
      ret = Math.abs(target - sum) < Math.abs(target - ret) ? sum : ret
    }
  }

  return ret
}
