/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b);
    let len = nums.length;
    let max = nums[len - 1] * nums[len - 2] * nums[len - 3];
    let min = nums[0] * nums[1] * nums[len - 1];
    return Math.max(max, min);
};
// @lc code=end
