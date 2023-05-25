/*
 * @lc app=leetcode id=1217 lang=javascript
 *
 * [1217] Minimum Cost to Move Chips to The Same Position
 */

// @lc code=start
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    const odd = position.filter(p => p % 2 === 1).length;
    const even = position.length - odd;
    return Math.min(odd, even);
};
// @lc code=end
