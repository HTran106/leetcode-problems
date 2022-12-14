/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if (amount === 0) return 0
    if (coins.length === 1 && coins[0] > amount) return -1
    let obj = {};
    coins.sort((a, b) => b - a)
    coins.forEach(coin => {
        obj[coin] = Math.floor(amount / coin)
        amount = amount % coin
    })
    let total = Object.values(obj)
    total = total.reduce((a, c) => a + c)
    return total
};
// @lc code=end
