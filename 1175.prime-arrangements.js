/*
 * @lc app=leetcode id=1175 lang=javascript
 *
 * [1175] Prime Arrangements
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
    const MOD = 1e9 + 7;
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
};
// @lc code=end
