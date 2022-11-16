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
    if (n === 1) return 1
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(new Array(i))
        n -= i
    }
    return arr.length
};
// @lc code=end
