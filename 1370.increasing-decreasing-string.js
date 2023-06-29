/*
 * @lc app=leetcode id=1370 lang=javascript
 *
 * [1370] Increasing Decreasing String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let result = '';
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    const sortedKeys = [...map.keys()].sort();

    
};
// @lc code=end
