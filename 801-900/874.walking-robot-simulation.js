/*
 * @lc app=leetcode id=874 lang=javascript
 *
 * [874] Walking Robot Simulation
 *
 * https://leetcode.com/problems/walking-robot-simulation/description/
 *
 * algorithms
 * Easy (35.42%)
 * Total Accepted:    19.8K
 * Total Submissions: 55.7K
 * Testcase Example:  '[4,-1,3]\n[]'
 *
 * A robot on an infinite grid starts at point (0, 0) and faces north.  The
 * robot can receive one of three possible types of commands:
 *
 *
 * -2: turn left 90 degrees
 * -1: turn right 90 degrees
 * 1 <= x <= 9: move forward x units
 *
 *
 * Some of the grid squares are obstacles. 
 *
 * The i-th obstacle is at grid point (obstacles[i][0], obstacles[i][1])
 *
 * If the robot would try to move onto them, the robot stays on the previous
 * grid square instead (but still continues following the rest of the route.)
 *
 * Return the square of the maximum Euclidean distance that the robot will be
 * from the origin.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: commands = [4,-1,3], obstacles = []
 * Output: 25
 * Explanation: robot will go to (3, 4)
 *
 *
 *
 * Example 2:
 *
 *
 * Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
 * Output: 65
 * Explanation: robot will be stuck at (1, 4) before turning left and going to
 * (1, 8)
 *
 *
 *
 *
 *
 * Note:
 *
 *
 * 0 <= commands.length <= 10000
 * 0 <= obstacles.length <= 10000
 * -30000 <= obstacle[i][0] <= 30000
 * -30000 <= obstacle[i][1] <= 30000
 * The answer is guaranteed to be less than 2 ^ 31.
 *
 *
 */
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
    const set = new Set()
    obstacles.forEach(o => {
        set.add(o[0] + ',' + o[1])
    })
    let max = 0
    let x = 0
    let y = 0
    let dir = 0
    let dirList = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    commands.forEach(c => {
        if (c === -2) {
            dir = (dir + 3) % 4
        } else if (c === -1) {
            dir = (dir + 1) % 4
        } else {
            const step = dirList[dir]
            while (c-- > 0 && !set.has((x + step[0]) + ',' + (y + step[1]))) {
                x += step[0]
                y += step[1]
            }
            max = Math.max(max, x * x + y * y)
        }
    })
    return max
}
