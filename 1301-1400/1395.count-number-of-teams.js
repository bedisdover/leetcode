/*
 * @lc app=leetcode id=1395 lang=javascript
 *
 * [1395] Count Number of Teams
 *
 * https://leetcode.com/problems/count-number-of-teams/description/
 *
 * algorithms
 * Medium (82.08%)
 * Total Accepted:    33.4K
 * Total Submissions: 40.7K
 * Testcase Example:  '[2,5,3,4,1]\r'
 *
 * There are n soldiers standing in a line. Each soldier is assigned a unique
 * rating value.
 *
 * You have to form a team of 3 soldiers amongst them under the following
 * rules:
 *
 *
 * Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j],
 * rating[k]).
 * A team is valid if:  (rating[i] < rating[j] < rating[k]) or (rating[i] >
 * rating[j] > rating[k]) where (0 <= i < j < k < n).
 *
 *
 * Return the number of teams you can form given the conditions. (soldiers can
 * be part of multiple teams).
 *
 *
 * Example 1:
 *
 *
 * Input: rating = [2,5,3,4,1]
 * Output: 3
 * Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1),
 * (5,3,1).
 *
 *
 * Example 2:
 *
 *
 * Input: rating = [2,1,3]
 * Output: 0
 * Explanation: We can't form any team given the conditions.
 *
 *
 * Example 3:
 *
 *
 * Input: rating = [1,2,3,4]
 * Output: 4
 *
 *
 *
 * Constraints:
 *
 *
 * n == rating.length
 * 1 <= n <= 200
 * 1 <= rating[i] <= 10^5
 *
 */
/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
    let res = 0
    for (let i = 0; i < rating.length; i++) {
        let leftLess = 0
        let leftGreater = 0
        let rightLess = 0
        let rightGreater = 0
        for (let j = 0; j < rating.length; j++) {
            if (rating[i] < rating[j]) {
                if (i < j) {
                    rightGreater++
                } else {
                    leftGreater++
                }
            } else if (rating[i] > rating[j]) {
                if (i < j) {
                    rightLess++
                } else {
                    leftLess++
                }
            }
        }
        res += leftLess * rightGreater + leftGreater * rightLess
    }
    return res
}
