/*
 * @lc app=leetcode id=1051 lang=javascript
 *
 * [1051] Height Checker
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let count = 0
    let sortedHeights = [...heights].sort((a, b) => a - b)
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) {
            count++
        }
    }
    return count
};
// @lc code=end
