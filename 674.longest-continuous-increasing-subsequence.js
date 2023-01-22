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
    let count = 1
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (num < nums[i + 1]) {
            count++
        } else {
            obj[count] = count
            count = 1
        }
    }
    return Math.max(...Object.keys(obj))
};
// @lc code=end
