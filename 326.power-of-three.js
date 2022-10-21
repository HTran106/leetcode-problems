/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n === 1) {
        return true;
    }
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 3 === 0) {
            n = n / 3;
        } else {
            return false;
        }
    }
    return true;
};

// @lc code=end
