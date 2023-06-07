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
    const sLen = s.length;
    const goalLen = goal.length;

    if (sLen !== goalLen) return false;

    if (s === goal) {
        const set = new Set(s.split(''));
        return set.size < sLen;
    }

    const diff = [];
    
};

// @lc code=end
