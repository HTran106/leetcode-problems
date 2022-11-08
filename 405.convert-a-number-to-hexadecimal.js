/*
 * @lc app=leetcode id=405 lang=javascript
 *
 * [405] Convert a Number to Hexadecimal
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    let hex = '';
    if (num === 0) {
        return '0';
    }
    while (num !== 0) {
        let digit = num & 0xf;
        if (digit < 10) {
            hex = digit + hex;
        } else {
            hex = String.fromCharCode(digit + 87) + hex;
        }
        num = num >>> 4;
    }
    return hex;
};
// @lc code=end
