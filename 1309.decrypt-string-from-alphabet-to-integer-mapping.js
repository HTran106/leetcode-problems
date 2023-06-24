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
    const result = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i + 2] === '#') {
            result.push(map.get(s[i] + s[i + 1]));
            i += 2;
        } else {
            result.push(map.get(s[i]));
        }
    }

    return result.join('');
};
// @lc code=end
