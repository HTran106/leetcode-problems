/*
 * @lc app=leetcode id=1221 lang=javascript
 *
 * [1221] Split a String in Balanced Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let left = 0
    let right = 0
    let count = 0
    for (let char of s) {
        if (char === 'L') {
            left++
        } else {
            right++
        }
        if (left === right) {
            count++
        }
    }
    return count
};
// @lc code=end
