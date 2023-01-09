/*
 * @lc app=leetcode id=1005 lang=javascript
 *
 * [1005] Maximize Sum Of Array After K Negations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    for (let i = 0; i < k; i++) {
        let min = Math.min(...nums)
        let index = nums.indexOf(min)
        nums[index] = -nums[index]
    }
    return nums.reduce((a, b) => a + b)
};
// @lc code=end
