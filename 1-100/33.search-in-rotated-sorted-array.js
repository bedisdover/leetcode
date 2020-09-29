/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (33.25%)
 * Total Accepted:    496.2K
 * Total Submissions: 1.5M
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 *
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 *
 * You are given a target value to search. If found in the array return its
 * index, otherwise return -1.
 *
 * You may assume no duplicate exists in the array.
 *
 * Your algorithm's runtime complexity must be in the order of O(log n).
 *
 * Example 1:
 *
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let start = 0
  let end = nums.length

  while (start < end) {
    let mid = (start + end) >> 1

    if (nums[mid] === target) {
      return mid
    }
    if (nums[start] <= nums[mid]) { // start -> mid 区间递增
      if (nums[start] <= target && target < nums[mid]) {
        end = mid
      } else {
        start = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[end - 1]) {
        start = mid + 1
      } else {
        end = mid
      }
    }
  }

  return -1
}
