/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    s = s.split('')
    t = t.split('')
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (char === '#') {
            s.splice(s.indexOf(char) - 1, 2)
            i -= 2
        }
    }
    for (let i = 0; i < t.length; i++) {
        let char = t[i]
        if (char === '#') {
            t.splice(t.indexOf(char) - 1, 2)
            i -= 2
        }
    }
    return s.join('') === t.join('')
};
// @lc code=end
