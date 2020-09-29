/*
 * @lc app=leetcode id=925 lang=javascript
 *
 * [925] Long Pressed Name
 *
 * https://leetcode.com/problems/long-pressed-name/description/
 *
 * algorithms
 * Easy (39.93%)
 * Total Accepted:    49.6K
 * Total Submissions: 124.4K
 * Testcase Example:  '"alex"\n"aaleex"'
 *
 * Your friend is typing his name into a keyboard.  Sometimes, when typing a
 * character c, the key might get long pressed, and the character will be typed
 * 1 or more times.
 *
 * You examine the typed characters of the keyboard.  Return True if it is
 * possible that it was your friends name, with some characters (possibly none)
 * being long pressed.
 *
 *
 * Example 1:
 *
 *
 * Input: name = "alex", typed = "aaleex"
 * Output: true
 * Explanation: 'a' and 'e' in 'alex' were long pressed.
 *
 *
 * Example 2:
 *
 *
 * Input: name = "saeed", typed = "ssaaedd"
 * Output: false
 * Explanation: 'e' must have been pressed twice, but it wasn't in the typed
 * output.
 *
 *
 * Example 3:
 *
 *
 * Input: name = "leelee", typed = "lleeelee"
 * Output: true
 *
 *
 * Example 4:
 *
 *
 * Input: name = "laiden", typed = "laiden"
 * Output: true
 * Explanation: It's not necessary to long press any character.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= name.length <= 1000
 * 1 <= typed.length <= 1000
 * The characters of name and typed are lowercase letters.
 *
 *
 */
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    let p = 0
    for (let i = 0; i < typed.length;) {
        if (typed[i] === name[p]) {
            let c = name[p]
            while (name[++p] === c) {
                if (typed[++i] !== c) {
                    return false
                }
            }
            while (typed[++i] === c) {}
        } else {
            return false
        }
    }
    return p === name.length
}
