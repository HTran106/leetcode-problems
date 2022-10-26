/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const words = new Set(s.split(' '))
    const [word1, word2] = words

    for (let i = 0; i < pattern.length; i++) {
        let patt = pattern[i]
        for (let j = 0; j < s.split(' ').length; j++) {
            let w = s.split(' ')[j]
            // if (w !== word1 || w !== word2) return false
            if (patt === 'a' && w !== word1) return false
            if (patt === 'b' && w !== word2) return false
        }
    }
    return true
};


// @lc code=end
