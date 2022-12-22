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
    let copy = s.replaceAll("-", "")
    let res = []
    for (let i = copy.length - k; i >= 0; i -= k) {
        res.unshift(copy.slice(i, i + 4).toUpperCase())
    }
    return res.join('-')
};
// @lc code=end
