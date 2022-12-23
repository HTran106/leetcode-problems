/*
 * @lc app=leetcode id=482 lang=javascript
 *
 * [482] License Key Formatting
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let copy = s.split('-')
    let res = []
    for (let i = copy.length - k; i >= 0; i -= k) {
        res.unshift(copy.splice(i, copy.length, k).toUpperCase())
    }
    return res.join('-')
};
// @lc code=end
