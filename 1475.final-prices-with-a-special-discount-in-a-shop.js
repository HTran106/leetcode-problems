/*
 * @lc app=leetcode id=1475 lang=javascript
 *
 * [1475] Final Prices With a Special Discount in a Shop
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const result = [];
    for (let i = 0; i < prices.length; i++) {
        let discount = 0;
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                discount = prices[j];
                break;
            }
        }
        result.push(prices[i] - discount);
    }
    return result;
};
// @lc code=end
