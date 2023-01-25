/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let total = 0
    for (let i = 0; i < cost.length; i++) {
        // console.log(cost[i])
        if (cost[i] < cost[i + 1]) {
            total += +cost[i]
        } else {
            total += +cost[i + 1]
        }
    }
    return total
};
// @lc code=end
