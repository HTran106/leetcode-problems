/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    const evens = nums.filter(num => num % 2 === 0);
    const odds = nums.filter(num => num % 2 !== 0);
    return evens.concat(odds);
};
// @lc code=end
