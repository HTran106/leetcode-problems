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
    let subSum = 0;
    const result = [];
    for (let i = 0; i < sorted.length; i++) {
        subSum += sorted[i];
        result.push(sorted[i]);
        if (subSum > sum - subSum) {
            break;
        }
    }
    return result;
};
// @lc code=end
