/*
 * @lc app=leetcode id=1464 lang=javascript
 *
 * [1464] Maximum Product of Two Elements in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const sorted = nums.sort((a, b) => b - a);
    return (sorted[0] - 1) * (sorted[1] - 1);
};
// @lc code=end
