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
    const set = new Set()
    let max = -Infinity
    for (let i = 0; i < nums.length - k + 1; i++) {
        let sum = 0
        for (let j = i; j < i + k; j++) {
            sum += nums[j]
        }
        if (sum > max) max = sum
    }
    return max / k
};
// @lc code=end
