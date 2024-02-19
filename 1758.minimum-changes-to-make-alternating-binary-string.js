/*
 * @lc app=leetcode id=1758 lang=javascript
 *
 * [1758] Minimum Changes To Make Alternating Binary String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            if (s[i] === '0') {
                count1++;
            } else {
                count2++;
            }
        } else {
            if (s[i] === '0') {
                count2++;
            } else {
                count1++;
            }
        }
    }
    return Math.min(count1, count2);
};
// @lc code=end
