/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const str = n.toString(2)
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '1') count++
    }
    return count
};
// @lc code=end
