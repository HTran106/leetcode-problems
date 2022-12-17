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
    let res = [[1]]
    n = n - 1
    while (n !== 0) {
        let nextLength = res[res.length - 1].length + 1
        if (nextLength > n) return res.length
        else res.push(new Array(nextLength))
        n -+ nextLength
    }
    return res.length 
};
// @lc code=end
