/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (28.07%)
 * Total Accepted:    690.1K
 * Total Submissions: 2.5M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 *
 * Example 1:
 *
 *
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: "cbbd"
 * Output: "bb"
 *
 *
 */
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  let index = 0
  let max = 1
  const dp = new Array(s.length).fill('').map(() => [])

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true
    for (let j = 0; j < i; j++) {
      dp[j][i] = (s[j] === s[i] && (i - j < 2 || dp[j + 1][i - 1]))
      if (dp[j][i] && max < i - j + 1) {
        max = i - j + 1
        index = j
      }
    }
  }
  return s.substr(index, max)
}
console.log(longestPalindrome('babad'))
