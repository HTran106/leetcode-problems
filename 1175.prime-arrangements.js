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
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    let primeCount = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primeCount++;
        }
    }
    let res = 1;
    for (let i = 2; i <= primeCount; i++) {
        res = res * i % MOD;
    }
    for (let i = 2; i <= n - primeCount; i++) {
        res = res * i % MOD;
    }
    return res;


};
// @lc code=end
