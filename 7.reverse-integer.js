/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let num = x.toString().split('').reverse().join('')
    if (num[num.length - 1] === '-') {
        num = num.slice(0, num.length - 1)
        num = '-' + num
    }
    num = +num
    if (num > 2 ** 31 - 1 || num < -(2 ** 31)) return 0
    return num
};

// @lc code=end
