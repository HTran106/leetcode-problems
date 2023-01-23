/*
 * @lc app=leetcode id=682 lang=javascript
 *
 * [682] Baseball Game
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let res = []
    operations.forEach(operation => {
        if (operation === '+') {
            let prev1 = res[res.length - 1]
            let prev2 = res[res.length - 2]
            res.push(prev1 + prev2)
        }

        if (operation === D) {
            let prev = res[res.length - 1]
        }
    })
};
// @lc code=end
