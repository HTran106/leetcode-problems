/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let sign = 1;
    if (dividend < 0) {
        sign = -sign;
        dividend = -dividend;
    }
    if (divisor < 0) {
        sign = -sign;
        divisor = -divisor;
    }
    let result = 0;
    while (dividend >= divisor) {
        let temp = divisor;
        let multiple = 1;
        while (dividend >= temp) {
            dividend -= temp;
            result += multiple;
            temp <<= 1;
            multiple <<= 1;
        }
    }
    if (sign > 0) {
        return Math.min(result, 2 ** 31 - 1);
    } else {
        return Math.max(-result, -(2 ** 31));
    }
};
// @lc code=end
