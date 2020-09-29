/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 *
 * https://leetcode.com/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (36.73%)
 * Total Accepted:    195K
 * Total Submissions: 530.6K
 * Testcase Example:  '"aba"'
 *
 *
 * Given a non-empty string s, you may delete at most one character.  Judge
 * whether you can make it a palindrome.
 *
 *
 * Example 1:
 *
 * Input: "aba"
 * Output: True
 *
 *
 *
 * Example 2:
 *
 * Input: "abca"
 * Output: True
 * Explanation: You could delete the character 'c'.
 *
 *
 *
 * Note:
 *
 * The string will only contain lowercase characters a-z.
 * The maximum length of the string is 50000.
 *
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    const valid = (s, count = 0) => {
        let l = 0
        let r = s.length - 1
        while (l < r) {
            if (s[l] !== s[r]) {
                if (count) {
                    return false
                }
                return valid(s.slice(l + 1, r + 1), count + 1) || valid(s.slice(l, r), count + 1)
            } else {
                l++
                r--
            }
        }
        return true
    }
    return valid(s)
}
