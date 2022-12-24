/*
 * @lc app=leetcode id=2180 lang=javascript
 *
 * [2180] Count Integers With Even Digit Sum
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count = 0
    for (let i = 1; i <= num; i++) {
        i % 2 === 0 ? count++ : null
    }
    return count
};
// @lc code=end
[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]
