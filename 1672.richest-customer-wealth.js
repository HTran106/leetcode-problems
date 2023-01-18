/*
 * @lc app=leetcode id=1672 lang=javascript
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max = 0;
    accounts.forEach(acc => {
        const accTotal = acc.reduce((a, c) => a + c)
        if (accTotal > max) max = accTotal
    })
    return max
};
// @lc code=end
