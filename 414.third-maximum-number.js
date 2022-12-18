/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let unique = new Set(nums)
    let sorted = Array.from(unique)
    if (sorted.length <= 2) return Math.max(...sorted)
    else sorted.sort((a, b) => a - b)
    return sorted[sorted.length - 3]
};
// @lc code=end
