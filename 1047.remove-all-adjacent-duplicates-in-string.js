/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    for (let i = 0; i < s.length; i++) {
        let char = s[i]

        if (char === s[i + 1]) {
            s = s.slice(0, i) + s.slice(i + 2)
            i = -1
        }
    }
    return s
};
// @lc code=end
