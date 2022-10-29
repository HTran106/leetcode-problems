/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let i = 0
    while (i < nums.length) {
        if (nums[i] === target) {
            return i
        }
        if (nums[i] < target && nums[i + 1] > target) {
            return i + 1
        }
        if (nums[nums.length - 1] < target) {
            return nums.length
        }
        if (nums[0] > target) {
            return 0
        }
        i++
    }
};
// @lc code=end
