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
    chars.sort((a, b) => a - b)
    console.log(chars)
};
// @lc code=end
