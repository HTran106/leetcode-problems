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

const divisors = num => {
    const res = []

    for (let i = 1; i < num; i++) {
        if (num % i === 0) res.push(i)
    }

    return res
}
var checkPerfectNumber = function(num) {
    return divisors(num).reduce((a, c) => a + c, 0) === num
};
// @lc code=end
