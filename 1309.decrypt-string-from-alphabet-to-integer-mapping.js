/*
 * @lc app=leetcode id=1309 lang=javascript
 *
 * [1309] Decrypt String from Alphabet to Integer Mapping
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const map = new Map();
    for (let i = 1; i <= 26; i++) {
        map.set(i.toString(), String.fromCharCode(96 + i));
    }
    
};
// @lc code=end
