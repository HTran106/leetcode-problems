/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = 0
    for (let i = 0; i < prices.length; i++) {
        let curr = prices[i]
        let maxFutures = Math.max(...prices.splice(i + 1))
        let profit = maxFutures - curr
        console.log(profit)
        if (profit > max) max = profit
    }
    return max
};
// @lc code=end
