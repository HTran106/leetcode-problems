/*
 * @lc app=leetcode id=1732 lang=javascript
 *
 * [1732] Find the Highest Altitude
 */

// @lc code=start
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const res = [0];
    for (let i = 0; i < gain.length; i++) {
        res.push(res[i] + gain[i]);
    }
    return Math.max(...res);
};
// @lc code=end
