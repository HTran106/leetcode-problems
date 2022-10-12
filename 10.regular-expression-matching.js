/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const dp = [];
    for (let i = 0; i <= s.length; i++) {
        dp[i] = [];
        for (let j = 0; j <= p.length; j++) {
            dp[i][j] = false;
        }
    }
    dp[0][0] = true;
    for (let i = 0; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 2] || (i > 0 && dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === '.'));
            } else {
                dp[i][j] = i > 0 && dp[i - 1][j - 1] && (s[i - 1] === p[j - 1] || p[j - 1] === '.');
            }
        }
    }
    return dp[s.length][p.length];
};
// @lc code=end
