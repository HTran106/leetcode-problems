/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.push(nums.splice(i, 1))
            i--
        }
    }
    return nums
};
// @lc code=end
