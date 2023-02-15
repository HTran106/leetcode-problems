/*
 * @lc app=leetcode id=657 lang=javascript
 *
 * [657] Robot Return to Origin
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let verticle = 0
    let horizontal = 0
    for (let char of moves) {
        if (char === 'U') verticle++
        if (char === 'D') verticle--
        if (char === 'L') horizontal--
        if (char === 'R') horizontal++
    }
    return verticle === 0 && horizontal === 0
};
// @lc code=end
