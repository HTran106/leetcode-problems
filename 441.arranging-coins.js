/*
 * @lc app=leetcode id=441 lang=javascript
 *
 * [441] Arranging Coins
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */


var arrangeCoins = function(n) {
    let i = 1
    while (n >= i) {
        n -= i
        i++
    }
    return i - 1
};
// @lc code=end
