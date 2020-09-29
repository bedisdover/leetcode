/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (24.95%)
 * Total Accepted:    670.4K
 * Total Submissions: 2.7M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 *
 * Note:
 *
 * The solution set must not contain duplicate triplets.
 *
 * Example:
 *
 *
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 *
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  if (nums.length < 3) {
    return []
  }

  nums.sort((a, b) => a - b)
  const ret = []

  for (let i = 0; i < nums.length; i++) {
    let gap = -nums[i]
    let l = i + 1
    let r = nums.length - 1

    if (i > 0 && nums[i - 1] === nums[i]) {
      continue
    }

    while (l < r) {
      const sum = nums[l] + nums[r]
      if (sum === gap) {
        ret.push([nums[i], nums[l], nums[r]])
        l++
        while (nums[l] === nums[l - 1]) {
          l++
        }
        r--
        while (nums[r] === nums[r + 1]) {
          r--
        }
      } else if (sum < gap) {
        l++
      } else {
        r--
      }
    }
  }

  return ret
}
