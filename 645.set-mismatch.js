/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let n = nums.length;
    let sum = (n * (n + 1)) / 2;
    let set = new Set();
    let dup = -1;
    for (let i = 0; i < n; i++) {
        if (set.has(nums[i])) {
        dup = nums[i];
        }
        set.add(nums[i]);
        sum -= nums[i];
    }
    return [dup, dup + sum];
};
// @lc code=end
