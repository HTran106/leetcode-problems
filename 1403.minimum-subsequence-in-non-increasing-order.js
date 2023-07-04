/*
 * @lc app=leetcode id=1403 lang=javascript
 *
 * [1403] Minimum Subsequence in Non-Increasing Order
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    const sorted = nums.sort((a, b) => b - a);
    const sum = sorted.reduce((acc, cur) => acc + cur, 0);
    
};
// @lc code=end
