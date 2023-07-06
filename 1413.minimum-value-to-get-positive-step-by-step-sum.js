/*
 * @lc app=leetcode id=1413 lang=javascript
 *
 * [1413] Minimum Value to Get Positive Step by Step Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    const sum = nums.reduce((acc, cur) => acc + cur, 0);
    let min = sum;
    let current = 0;
    for (let i = 0; i < nums.length; i++) {
        current += nums[i];
        min = Math.min(min, current);
    }
    return min < 0 ? 1 - min : 1;
};
// @lc code=end
