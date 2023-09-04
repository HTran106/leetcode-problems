/*
 * @lc app=leetcode id=1716 lang=javascript
 *
 * [1716] Calculate Money in Leetcode Bank
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    const weeks = Math.floor(n / 7);
    const days = n % 7;
    let res = 0;
    for (let i = 0; i < weeks; i++) {
        res += 28 + i * 7;
    }
    for (let i = 0; i < days; i++) {
        res += weeks + i + 1;
    }
    return res;
};
// @lc code=end
