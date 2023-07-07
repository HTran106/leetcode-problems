/*
 * @lc app=leetcode id=1422 lang=javascript
 *
 * [1422] Maximum Score After Splitting a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    const left = new Array(s.length).fill(0);
    const right = new Array(s.length).fill(0);

    for (let i = 0; i < s.length; i++) {
        left[i] = s[i] === '0' ? 1 : 0;
        if (i > 0) {
            left[i] += left[i - 1];
        }
    }

    for (let i = s.length - 1; i >= 0; i--) {
        right[i] = s[i] === '1' ? 1 : 0;
        if (i < s.length - 1) {
            right[i] += right[i + 1];
        }
    }

    let result = 0;
    for (let i = 0; i < s.length - 1; i++) {
        result = Math.max(result, left[i] + right[i + 1]);
    }

    return result;
};
// @lc code=end
