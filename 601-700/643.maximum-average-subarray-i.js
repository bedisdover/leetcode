/*
 * @lc app=leetcode id=643 lang=javascript
 *
 * [643] Maximum Average Subarray I
 *
 * https://leetcode.com/problems/maximum-average-subarray-i/description/
 *
 * algorithms
 * Easy (41.58%)
 * Total Accepted:    82.8K
 * Total Submissions: 199K
 * Testcase Example:  '[1,12,-5,-6,50,3]\n4'
 *
 * Given an array consisting of n integers, find the contiguous subarray of
 * given length k that has the maximum average value. And you need to output
 * the maximum average value.
 *
 * Example 1:
 *
 *
 * Input: [1,12,-5,-6,50,3], k = 4
 * Output: 12.75
 * Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= k <= n <= 30,000.
 * Elements of the given array will be in the range [-10,000, 10,000].
 *
 *
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let sum = 0
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    let l = 1
    let r = k
    let max = sum / k
    while (r < nums.length) {
        sum -= nums[l - 1]
        sum += nums[r]
        max = Math.max(max, sum / k)
        l++
        r++
    }
    return max
}
