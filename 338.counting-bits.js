/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const result = []
    for (let i = 0; i <= n; i++) {
        result.push(i.toString(2).split('').filter(item => item === '1').length)
    }
    return result
};
// @lc code=end
