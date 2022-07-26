/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word === word.toUpperCase()) return true
    if (word === word.toLowerCase()) return true
    if (word === word[0].toUpperCase() + word.slice(1).toLowerCase()) return true
    return false
};
// @lc code=end
