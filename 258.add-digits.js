/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    while (num > 9) {
        num = num.toString().split('').reduce((a, b) => (+a) + (+b));
    }
    return num;
};

let num = 38

// @lc code=end
