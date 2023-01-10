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
var maximumProduct = function(nums) {
    const res = 1
    for (let i = 0; i < 3; i++) {
        const max = Math.max(...nums)
        res *= max
        nums.splice(nums.indexOf(max), 1)
    }

    
};
// @lc code=end