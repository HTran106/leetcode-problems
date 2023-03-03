/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) {
        return 1
    }
    if (n === 1) {
        return x
    }
    if (n === -1) {
        return 1 / x
    }
    let half = myPow(x, Math.floor(n / 2))
    let rest = myPow(x, n % 2)
    return half * half * rest
};
// @lc code=end
