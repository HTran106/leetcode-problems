/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let result = ''
    let carry = 0
    let i = a.length - 1
    let j = b.length - 1
    while (i >= 0 || j >= 0) {
        let sum = carry
        if (i >= 0) {
            sum += a[i] - '0'
            i--
        }
        if (j >= 0) {
            sum += b[j] - '0'
            j--
        }
        result = sum % 2 + result
        carry = Math.floor(sum / 2)
    }
    if (carry > 0) {
        result = carry + result
    }
    return result
};
// @lc code=end
