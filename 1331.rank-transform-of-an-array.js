/*
 * @lc app=leetcode id=1331 lang=javascript
 *
 * [1331] Rank Transform of an Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let sorted = [...arr].sort((a, b) => a - b)
    sorted = Array.from(new Set(sorted))
    const res = arr.map(num => sorted.indexOf(num) + 1)
    return res
};
// @lc code=end
