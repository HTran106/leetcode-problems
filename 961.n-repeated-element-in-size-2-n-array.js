/*
 * @lc app=leetcode id=961 lang=javascript
 *
 * [961] N-Repeated Element in Size 2N Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) !== i) {
            return nums[i];
        }
    }
};
// @lc code=end
