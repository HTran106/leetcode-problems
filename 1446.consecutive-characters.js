/*
 * @lc app=leetcode id=1446 lang=javascript
 *
 * [1446] Consecutive Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    const result = [];
    let current = s[0];
    let count = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === current) {
            count++;
        } else {
            result.push(count);
            current = s[i];
            count = 1;
        }
    }
    result.push(count);
    
};
// @lc code=end
