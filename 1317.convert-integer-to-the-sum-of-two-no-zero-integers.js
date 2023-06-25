/*
 * @lc app=leetcode id=1317 lang=javascript
 *
 * [1317] Convert Integer to the Sum of Two No-Zero Integers
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    const result = [];
    for (let i = 1; i < n; i++) {
        const str = i.toString() + (n - i).toString();
        if (!str.includes('0')) {
            result.push(i, n - i);
            break;
        }
    }
    return result;
};
// @lc code=end
