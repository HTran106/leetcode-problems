/*
 * @lc app=leetcode id=1374 lang=javascript
 *
 * [1374] Generate a String With Characters That Have Odd Counts
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    const result = [];
    if (n % 2 === 0) {
        result.push('a');
        n--;
    }
    for (let i = 0; i < n; i++) {
        result.push('b');
    }
    return result.join('');
};
// @lc code=end
