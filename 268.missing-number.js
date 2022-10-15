/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const n = nums.length
    let res = []
    for (let i = 0; i <= n; i++) {
        if (!nums.includes(i)) {
            return i
        }
    }
};
// @lc code=end
