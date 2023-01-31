/*
 * @lc app=leetcode id=1025 lang=javascript
 *
 * [1025] Divisor Game
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    const dp = new Array(n + 1).fill(false);
    dp[1] = false;
    dp[2] = true;
    for (let i = 3; i <= n; i++) {
        
};
// @lc code=end
