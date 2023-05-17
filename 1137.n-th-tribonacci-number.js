/*
 * @lc app=leetcode id=1137 lang=javascript
 *
 * [1137] N-th Tribonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const res = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        res[i] = res[i - 1] + res[i - 2] + res[i - 3];
    }
    return res[n];
};
// @lc code=end
