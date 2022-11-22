/*
 * @lc app=leetcode id=860 lang=javascript
 *
 * [860] Lemonade Change
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let total = 0
    let curr = bills.shift()
    if (total - curr < 0) return false
    total += curr - 5
    return true
};
// @lc code=end
