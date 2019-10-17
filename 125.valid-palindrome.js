/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (32.64%)
 * Total Accepted:    423.5K
 * Total Submissions: 1.3M
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases.
 *
 * Note: For the purpose of this problem, we define empty string as valid
 * palindrome.
 *
 * Example 1:
 *
 *
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: "race a car"
 * Output: false
 *
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  let l = 0
  let r = s.length - 1

  s = s.toLowerCase()
  const check = c => (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')

  while (l < r) {
    if (!check(s[l])) {
      l++
    } else if (!check(s[r])) {
      r--
    } else if (s[l] !== s[r]) {
      return false
    } else {
      l++
      r--
    }
  }

  return true
}

console.log(isPalindrome('race a car'))
