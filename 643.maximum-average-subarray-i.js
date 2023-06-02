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
    const map = {}
    let max = -Infinity
    for (let i = 0; i < nums.length; i++) {
        if (i < k) {
            map[i] = nums[i]
        } else {
            map[i] = map[i - 1] + nums[i] - nums[i - k]
        }
        if (map[i] > max) max = map[i]
    }
    return max / k
};
// @lc code=end
