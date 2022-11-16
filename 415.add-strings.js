/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = '';
    while (i >= 0 || j >= 0) {
        let sum = carry;
        if (i >= 0) {
            sum += parseInt(num1[i]);
            i--;
        }
        if (j >= 0) {
            sum += parseInt(num2[j]);
            j--;
        }
        carry = Math.floor(sum / 10);
        result = (sum % 10).toString() + result;
    }
    if (carry > 0) {
        result = carry.toString() + result;
    }
    return result;

};
// @lc code=end
