/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n === 1) {
        return true;
    }
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            return false;
        }
    }
    return true;
};
// @lc code=end
