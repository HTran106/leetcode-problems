/*
 * @lc app=leetcode id=1417 lang=javascript
 *
 * [1417] Reformat The String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    const letters = [];
    const numbers = [];

    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
            letters.push(s[i]);
        } else {
            numbers.push(s[i]);
        }
    }

    if (Math.abs(letters.length - numbers.length) > 1) {
        return '';
    }
    
};
// @lc code=end
