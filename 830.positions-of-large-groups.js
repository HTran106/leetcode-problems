/*
 * @lc app=leetcode id=830 lang=javascript
 *
 * [830] Positions of Large Groups
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let result = [];
    let i = 0;
    while (i < s.length) {
        let j = i + 1;
        while (j < s.length && s[j] === s[i]) {
            j++;
        }
        if (j - i >= 3) {
            result.push([i, j - 1]);
        }
        i = j;
    }
    return result;
};
// @lc code=end
