/*
 * @lc app=leetcode id=1528 lang=javascript
 *
 * [1528] Shuffle String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const chars = [];
    for (let i = 0; i < s.length; i++) {
        chars[indices[i]] = s[i];
    }
    return chars.join('');
};
// @lc code=end
