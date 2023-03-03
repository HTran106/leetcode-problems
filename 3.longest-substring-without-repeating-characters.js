/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = ''
    let current = ''
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (current.includes(char)) {
            if (current.length > longest.length) {
                longest = current
            }
            current = current.slice(current.indexOf(char) + 1) + char
        } else {
            current += char
        }
    }
    if (current.length > longest.length) {
        longest = current
    }
    return longest.length
};
// @lc code=end
