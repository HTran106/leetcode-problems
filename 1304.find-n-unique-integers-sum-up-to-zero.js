/*
 * @lc app=leetcode id=1304 lang=javascript
 *
 * [1304] Find N Unique Integers Sum up to Zero
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    const result = [];
    if (n % 2 !== 0) {
        result.push(0);
    }
    for (let i = 1; i <= n / 2; i++) {
        result.push(i);
        result.push(-i);
    }
    return result;
};
// @lc code=end
