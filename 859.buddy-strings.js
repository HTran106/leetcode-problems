/*
 * @lc app=leetcode id=859 lang=javascript
 *
 * [859] Buddy Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    [a, b] = s.split('')
    if ((b + a) === goal) return true
    return false
};

// @lc code=end
