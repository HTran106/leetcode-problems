/*
 * @lc app=leetcode id=1281 lang=javascript
 *
 * [1281] Subtract the Product and Sum of Digits of an Integer
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let prod = 1
    let sum = 0
    n = n.toString().split('')
    n.forEach(num => {
        prod *= +num
        sum += +num
    })
    return prod - sum
};
// @lc code=end
