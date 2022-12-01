/*
 * @lc app=leetcode id=2255 lang=javascript
 *
 * [2255] Count Prefixes of a Given String
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let count = 0
    for (let i = 0; i < words.length; i++) {
        if (s.startsWith(words[i])) {
            count++
        }
    }
    return count
};
// @lc code=end
