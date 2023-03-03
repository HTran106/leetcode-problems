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
var divide = function (dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }
    let sign = (dividend < 0) ^ (divisor < 0);
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let quotient = 0;
    while (dividend >= divisor) {
        let temp = divisor;
        let multiple = 1;
        while (dividend >= (temp << 1)) {
            temp <<= 1;
            multiple <<= 1;
        }
        dividend -= temp;
        quotient += multiple;
    }
    return sign ? -quotient : quotient;
};
// @lc code=end
