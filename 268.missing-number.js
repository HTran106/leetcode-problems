/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const numbers = new Set(nums);
    for (let i = 0; i <= nums.length; i++) {
        if (!numbers.has(i)) {
            return i;
        }
    }
};
// @lc code=end
