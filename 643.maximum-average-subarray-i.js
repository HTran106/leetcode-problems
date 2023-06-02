/*
 * @lc app=leetcode id=643 lang=javascript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    const len = nums.length
    let max = -Infinity
    for (let i = 0; i < len - k + 1; i++) {
        const sum = nums.slice(i, i + k).reduce((acc, cur) => acc + cur, 0)
        if (sum > max) max = sum
    }
    return max / k
};
// @lc code=end
