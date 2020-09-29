/*
 * @lc app=leetcode id=1302 lang=javascript
 *
 * [1302] Deepest Leaves Sum
 *
 * https://leetcode.com/problems/deepest-leaves-sum/description/
 *
 * algorithms
 * Medium (83.73%)
 * Total Accepted:    55.6K
 * Total Submissions: 66.4K
 * Testcase Example:  '[1,2,3,4,5,null,6,7,null,null,null,null,8]'
 *
 * Given a binary tree, return the sum of values of its deepest leaves.
 *
 * Example 1:
 *
 *
 *
 *
 * Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
 * Output: 15
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is between 1 and 10^4.
 * The value of nodes is between 1 and 100.
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
    const arr = [root]
    let sum = 0
    while (arr.length) {
        let size = arr.length
        sum = 0
        while (size-- > 0) {
            const top = arr.shift()
            sum += top.val
            if (top.left) {
                arr.push(top.left)
            }
            if (top.right) {
                arr.push(top.right)
            }
        }
    }
    return sum
}
