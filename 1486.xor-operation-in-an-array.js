/*
 * @lc app=leetcode id=1486 lang=javascript
 *
 * [1486] XOR Operation in an Array
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    const nums = [];
    for (let i = 0; i < n; i++) {
        nums.push(start + 2 * i);
    }
    return nums.reduce((acc, cur) => acc ^ cur);
};
// @lc code=end
