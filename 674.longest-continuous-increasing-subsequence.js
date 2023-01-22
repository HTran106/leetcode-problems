/*
 * @lc app=leetcode id=674 lang=javascript
 *
 * [674] Longest Continuous Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let count = 0

    let i = 0
    while(nums[i] < nums[i + 1]) count++
    
};
// @lc code=end
