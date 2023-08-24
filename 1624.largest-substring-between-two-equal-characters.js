/*
 * @lc app=leetcode id=1624 lang=javascript
 *
 * [1624] Largest Substring Between Two Equal Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    const map = {};
    let max = -1;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map[char] === undefined) {
            map[char] = i;
        } else {
            max = Math.max(max, i - map[char] - 1);
        }
    }
};
// @lc code=end
