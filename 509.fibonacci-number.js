/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;
    const fib = [0, 1, 1];
    while (fib.length <= n) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib[n];
};
// @lc code=end
