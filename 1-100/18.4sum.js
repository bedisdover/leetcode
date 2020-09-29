/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 *
 * https://leetcode.com/problems/4sum/description/
 *
 * algorithms
 * Medium (31.66%)
 * Total Accepted:    268.7K
 * Total Submissions: 848.3K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * Given an array nums of n integers and an integer target, are there elements
 * a, b, c, and d in nums such that a + b + c + d = target? Find all unique
 * quadruplets in the array which gives the sum of target.
 *
 * Note:
 *
 * The solution set must not contain duplicate quadruplets.
 *
 * Example:
 *
 *
 * Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
 *
 * A solution set is:
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j]
      if (map[sum]) {
        map[sum].push([i, j])
      } else {
        map[sum] = [[i, j]]
      }
    }
  }

  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const gap = target - nums[i] - nums[j]
      if (map[gap]) {
        map[gap].forEach(item => {
          if (i < item[0] && j < item[1] && j !== item[0]) {
            const temp = [nums[i], nums[j], nums[item[0]], nums[item[1]]]
            temp.sort((a, b) => a - b)
            set.add(temp.join())
          }
        })
      }
    }
  }

  return Array.from(set).map(item => item.split(',').map(s => +s))
}
