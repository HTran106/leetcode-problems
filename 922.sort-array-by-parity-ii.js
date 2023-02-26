/*
 * @lc app=leetcode id=922 lang=javascript
 *
 * [922] Sort Array By Parity II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let even = nums.filter(num => num % 2 === 0)
    let odd = nums.filter(num => num % 2 !== 0)
    let res = []

};
// @lc code=end
