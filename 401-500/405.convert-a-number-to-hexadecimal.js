/*
 * @lc app=leetcode id=405 lang=javascript
 *
 * [405] Convert a Number to Hexadecimal
 *
 * https://leetcode.com/problems/convert-a-number-to-hexadecimal/description/
 *
 * algorithms
 * Easy (44.04%)
 * Total Accepted:    69.5K
 * Total Submissions: 157.8K
 * Testcase Example:  '26'
 *
 *
 * Given an integer, write an algorithm to convert it to hexadecimal. For
 * negative integer, two’s complement method is used.
 *
 *
 * Note:
 *
 * All letters in hexadecimal (a-f) must be in lowercase.
 * The hexadecimal string must not contain extra leading 0s. If the number is
 * zero, it is represented by a single zero character '0'; otherwise, the first
 * character in the hexadecimal string will not be the zero character.
 * The given number is guaranteed to fit within the range of a 32-bit signed
 * integer.
 * You must not use any method provided by the library which converts/formats
 * the number to hex directly.
 *
 *
 *
 * Example 1:
 *
 * Input:
 * 26
 *
 * Output:
 * "1a"
 *
 *
 *
 * Example 2:
 *
 * Input:
 * -1
 *
 * Output:
 * "ffffffff"
 *
 *
 */
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    if (!num) {
        return '0'
    } else if (num < 0) {
        num += 2**32
    }
    const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    let ret = []
    while (num) {
        ret.unshift(arr[num % 16])
        num = Math.floor(num / 16)
    }
    return ret.join('')
}
