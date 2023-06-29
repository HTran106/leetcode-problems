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

    while (result.length < s.length) {
        for (let i = 0; i < sortedKeys.length; i++) {
            if (map.get(sortedKeys[i]) > 0) {
                result += sortedKeys[i];
                map.set(sortedKeys[i], map.get(sortedKeys[i]) - 1);
            }
        }
        for (let i = sortedKeys.length - 1; i >= 0; i--) {
            if (map.get(sortedKeys[i]) > 0) {
                result += sortedKeys[i];
                map.set(sortedKeys[i], map.get(sortedKeys[i]) - 1);
            }
        }
    }

    return result;
};
// @lc code=end
