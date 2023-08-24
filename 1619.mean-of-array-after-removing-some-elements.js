/*
 * @lc app=leetcode id=1619 lang=javascript
 *
 * [1619] Mean of Array After Removing Some Elements
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const len = sorted.length;
    const fivePercent = Math.floor(len * 0.05);
    const sum = sorted.slice(fivePercent, len - fivePercent).reduce((acc, cur) => acc + cur, 0);
    return sum / (len - fivePercent * 2);
};
// @lc code=end
