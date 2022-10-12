/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const first = strs[0];
    if (!first) return '';
    let result = '';
    for (let i = 0; i < first.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== first[i]) return result;
        }
        result += first[i];
    }
    return result;
};
// @lc code=end
