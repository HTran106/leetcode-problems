/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    return s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() === s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').reverse().join('');
};
// @lc code=end
