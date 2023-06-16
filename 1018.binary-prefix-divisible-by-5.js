/*
 * @lc app=leetcode id=1018 lang=javascript
 *
 * [1018] Binary Prefix Divisible By 5
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    const result = [];
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
        num = (num * 2 + nums[i]) % 5;
        result.push(num === 0);
    }
    return result;
};
// @lc code=end
