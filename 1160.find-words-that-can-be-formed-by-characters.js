/*
 * @lc app=leetcode id=1160 lang=javascript
 *
 * [1160] Find Words That Can Be Formed by Characters
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    chars = chars.split("").sort((a, b) => a.localeCompare(b)).join('');
    let sum = 0
    for (let i = 0; i < words.length; i++) {
        
};
// @lc code=end
