/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 *
 * https://leetcode.com/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (37.97%)
 * Total Accepted:    287.3K
 * Total Submissions: 755.6K
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * Given an array of integers and an integer k, find out whether there are two
 * distinct indices i and j in the array such that nums[i] = nums[j] and the
 * absolute difference between i and j is at most k.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,3,1], k = 3
 * Output: true
 *
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,0,1,1], k = 1
 * Output: true
 *
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1,2,3,1,2,3], k = 2
 * Output: false
 *
 *
 *
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    if (!k) {
        return false
    }

    const map = {}
    for (let i = 0; i < k && i < nums.length; i++) {
        if (map[nums[i]]) {
            return true
        } else {
            map[nums[i]] = true
        }
    }
    for (let i = k; i < nums.length; i++) {
        if (map[nums[i]]) {
            return true
        } else {
            delete map[nums[i - k]]
            map[nums[i]] = true
        }
    }
    return false
}
