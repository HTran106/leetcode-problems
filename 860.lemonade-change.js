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
    bills.forEach(bill => {
        console.log(total)
        if (bill !== 5) {
            if (total - bill < 0) return false
            else total -= bill
        } else {
            total += bill
        }
    })
    return true
};
// @lc code=end
