/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 *
 * https://leetcode.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (41.99%)
 * Total Accepted:    325.5K
 * Total Submissions: 773.6K
 * Testcase Example:  '1'
 *
 * The count-and-say sequence is the sequence of integers with the first five
 * terms as following:
 *
 *
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 *
 *
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 *
 * Given an integer n where 1 ≤ n ≤ 30, generate the n^th term of the
 * count-and-say sequence.
 *
 * Note: Each term of the sequence of integers will be represented as a
 * string.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: 1
 * Output: "1"
 *
 *
 * Example 2:
 *
 *
 * Input: 4
 * Output: "1211"
 *
 */
/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
  let s = '1'
  const reg = /(.)\1*/
  for (let i = 0; i < n - 1; i++) {
    let temp = ''
    let index = 0
    while (index < s.length) {
      const ret = reg.exec(s.slice(index))
      temp += ret[0].length + '' + ret[1]
      index += ret[0].length
    }
    s = temp
  }
  return s
}
for (let i = 1; i <= 10; i++) {
  console.log(i + ': ' + countAndSay(i))
}
