/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (40.89%)
 * Total Accepted:    348.6K
 * Total Submissions: 852K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 *
 * The input strings are both non-empty and contains only characters 1 or 0.
 *
 * Example 1:
 *
 *
 * Input: a = "11", b = "1"
 * Output: "100"
 *
 * Example 2:
 *
 *
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 *
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  let carry = 0
  let ret = ''
  const length = Math.max(a.length, b.length)

  for (let i = 0; i < length; i++) {
    const first = a[a.length - i - 1] ? +a[a.length - i - 1] : 0
    const second = b[b.length - i - 1] ? +b[b.length - i - 1] : 0
    ret = (first + second + carry) % 2 + ret
    carry = Math.floor((first + second + carry) / 2)
  }

  if (carry) {
    ret = '1' + ret
  }

  return ret
}
console.log(addBinary('1010', '1011'))
