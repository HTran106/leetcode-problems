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
var findErrorNums = function(nums) {
    return nums.map((num, i) => {
        num[i - 1] === num - 1 ? num : num + 1
    })
};
// @lc code=end
