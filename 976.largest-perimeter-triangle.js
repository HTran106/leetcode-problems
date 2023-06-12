/*
 * @lc app=leetcode id=976 lang=javascript
 *
 * [976] Largest Perimeter Triangle
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    const sorted = nums.sort((a, b) => b - a);
    for (let i = 0; i < sorted.length - 2; i++) {
        if (sorted[i] < sorted[i + 1] + sorted[i + 2]) return sorted[i] + sorted[i + 1] + sorted[i + 2];
    }
    return 0;
};
// @lc code=end
