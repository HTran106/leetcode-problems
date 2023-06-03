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
    const isPalindrome = (s, i, j) => {
        while (i < j) {
            if (s[i] !== s[j]) return false
            i++
            j--
        }
        return true
    }
    let i = 0
};
// @lc code=end
