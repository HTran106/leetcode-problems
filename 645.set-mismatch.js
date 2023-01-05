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
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (nums[i + 1] !== num + 1) nums.splice(i + 1, 1, num + 1)
    }
    return nums
};
// @lc code=end
