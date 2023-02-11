/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function(s) {
    if (s === s.split('').reverse().join('')) return true
    for (let i = 0; i < s.length; i++) {
        let temp = s.slice(0, i) + s.slice(i + 1)
        if (temp === temp.split('').reverse().join('')) return true
        console.log(s, temp)
    }
    return false
};
// @lc code=end
