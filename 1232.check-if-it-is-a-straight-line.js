/*
 * @lc app=leetcode id=1232 lang=javascript
 *
 * [1232] Check If It Is a Straight Line
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    const [x0, y0] = coordinates[0];
    const [x1, y1] = coordinates[1];
    const dx = x1 - x0;
    const dy = y1 - y0;
    for (let i = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];
        if ((x - x0) * dy !== (y - y0) * dx) {
            return false;
        }
    }
    return true;
};
// @lc code=end
