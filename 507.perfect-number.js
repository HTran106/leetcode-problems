/*
 * @lc app=leetcode id=507 lang=javascript
 *
 * [507] Perfect Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let divisors = []
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divisors.push(i)
        }
    }
    return divisors.reduce((a, b) => a + b, 0) === num
};
// @lc code=end
