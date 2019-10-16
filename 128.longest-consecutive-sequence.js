/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 *
 * https://leetcode.com/problems/longest-consecutive-sequence/description/
 *
 * algorithms
 * Hard (42.92%)
 * Total Accepted:    236.7K
 * Total Submissions: 551.3K
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * Given an unsorted array of integers, find the length of the longest
 * consecutive elements sequence.
 *
 * Your algorithm should run in O(n) complexity.
 *
 * Example:
 *
 *
 * Input: [100, 4, 200, 1, 3, 2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4].
 * Therefore its length is 4.
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  const exist = {}

  let longest = 0
  nums.forEach(item => {
    if (exist[item]) {
      return
    }

    const left = exist[item - 1] ? exist[item - 1] : 0
    const right = exist[item + 1] ? exist[item + 1] : 0

    const sum = left + right + 1
    exist[item] = sum
    exist[item - left] = sum
    exist[item + right] = sum

    longest = Math.max(sum, longest)
  })

  return longest
}
