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
    console.log(copy)
    let res = []
    let counter = 1
    let arr = []
    for (let i = s.length - 1; i >= 0; i--) {
        if (counter === k) {
            res.unshift(str)
            str = ''
            counter = 1
        } else {
            str += copy[i]
            counter++
        }
    }
    return res.join("-")
};
// @lc code=end
